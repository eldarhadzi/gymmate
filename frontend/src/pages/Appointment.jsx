import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelativeTrainers from '../components/RelativeTrainers'
import { toast } from 'react-toastify'
import axios from 'axios'

const Appointment = () => {

  const {trainerId} = useParams()
  const {trainers, currencySymbol, backendUrl, token, getTrainersData} = useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const navigate = useNavigate();

  const [trainerInfo, setTrainerInfo] = useState(null)
  const [trainerSlots, setTrainerSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchTrainerInfo = async () => {
    const trainerInfo = trainers.find(trainer => trainer._id === trainerId)
    setTrainerInfo(trainerInfo)
    console.log(trainerInfo)
  }

  const getAvailableSlots = async () => {
    setTrainerSlots([])

    // getting current date
    let today = new Date()

    for(let i = 0; i < 7; i++){
      // getting the date of the next 7 days with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      // setting end time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)

      // setting hours
      if(today.getDate() === currentDate.getDate()){
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      }
      else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while(currentDate < endTime){
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

        let day = currentDate.getDate()
        let month = currentDate.getMonth() + 1
        let year = currentDate.getFullYear()

        // construct a date
        const slotDate = day + "_" + month + "_" + year
        const slotTime = formattedTime

        const isSlotAvailable = trainerInfo.slots_booked[slotDate] && trainerInfo.slots_booked[slotDate].includes(slotTime) ? false : true

        if (isSlotAvailable) {
          // add slot to the array
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime,
          })
        }

        // increment the time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30)
    }

    setTrainerSlots(prev => ([...prev, timeSlots]))
  }

}

const bookAppointment = async () => {

  if (!token) {
    toast.warning('Login to Book Appointment')
    return navigate('/login')
  }

  try {

    const date = trainerSlots[slotIndex][0].datetime

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    const slotDate = day + "_" + month + "_" + year

    const {data} = await axios.post(backendUrl + '/api/user/book-appointment', {trainerId, slotDate, slotTime}, {headers:{token}})

    if (data.success) {
      toast.success(data.message)
      getTrainersData()
      navigate('/my-appointments')
    } else {
      toast.error(data.message)
    }
    
  } catch (error) {
    console.log(error)
    toast.error(error.message)
  }

}

  useEffect(() => {
    fetchTrainerInfo()
  }, [trainers, trainerId])

  useEffect(() => {
    getAvailableSlots()
  }, [trainerInfo])

  useEffect(() => {
    console.log(trainerSlots)
  }, [trainerSlots])

  // Function to handle speciality (Array or String)
  const handleSpeciality = (speciality) => {
    if (Array.isArray(speciality)) {
      return speciality.join(' | ');  
    } else {
      return speciality;  
    }
  }

  return trainerInfo && (
    <div>
      {/* ----- Trainer Details ----- */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div className='w-60 sm:w-72 h-60 sm:h-72 bg-secondary rounded-lg flex items-end justify-center overflow-hidden'>
          <img className='object-contain w-full h-full'  src={trainerInfo.image} alt="" />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
            {/* ----- Trainer Info: name, degree, experience ----- */}
            <p className='flex items-center gap-2 text-3xl font-medium  text-gray-900'>
              {trainerInfo.name}
              <img className='w-6' src={assets.verified_icon} alt="" />
            </p> 
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>
              {trainerInfo.degree} - {handleSpeciality(trainerInfo.speciality)}
            </p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{trainerInfo.experience}</button>
          </div>

          {/* ----- Trainer About ----- */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium mt-3 text-gray-900'>
              About <img src={assets.info_icon} alt="" />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{trainerInfo.about}</p>
          </div>
          <p className='text-gray-600 font-medium mt-4'>
            Appointment fee: <span className='text-gray-800'>{currencySymbol}{trainerInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* ----- Trainer Booking Slots ----- */}
      <div className='sm:pl-4 mt-6 font-medium text-gray-700'>
        <p>Booking slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            trainerSlots.length && trainerSlots.map((item, index)=>(
              <div onClick={()=> setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-secondary text-white' : 'border border-gray-400' }`} key={index}>
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            trainerSlots.length && trainerSlots[slotIndex].map((item, index)=>(
              <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-secondary text-white' : 'border border-gray-400' }`} key={index}>
                {item.time.toLowerCase()}
              </p>
            ))
          }
        </div>
        <button onClick={bookAppointment} className='bg-primary text-white text-md px-16 py-4 rounded-full my-6 hover:bg-hover transition'>Book Appointment</button>
      </div>
      {/* ----- Listing Relative Trainers ----- */}
      <RelativeTrainers trainerId={trainerId} speciality={trainerInfo.speciality} />  
    </div>
  )
}

export default Appointment




