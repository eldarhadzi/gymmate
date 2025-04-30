import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointment = () => {

  const {trainerId} = useParams()
  const {trainers, currencySymbol} = useContext(AppContext)

  const [trainerInfo, setTrainerInfo] = useState(null)

  const fetchTrainerInfo = async () => {
    const trainerInfo = trainers.find(trainer => trainer._id === trainerId)
    setTrainerInfo(trainerInfo)
    console.log(trainerInfo)
  }

  useEffect(() => {
    fetchTrainerInfo()
  }, [trainers, trainerId])

  return trainerInfo && (
    <div>
      {/* ----- Trainer Details ----- */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-secondary w-full sm:max-w-72 rounded-lg ' src={trainerInfo.image} alt="" />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
            {/* ----- Trainer Info: name, degree, experience ----- */}
            <p className='flex items-center gap-2 text-3xl font-medium  text-gray-900'>
              {trainerInfo.name}
              <img className='w-6' src={assets.verified_icon} alt="" />
            </p> 
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>
              {trainerInfo.degree} - {trainerInfo.speciality.join(' | ')}
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
    </div>
  )
}

export default Appointment