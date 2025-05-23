import React, { useContext, useEffect } from 'react'
import { TrainerContext } from '../../context/TrainerContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const TrainerAppointment = () => {

  const {tToken, appointments, getAppointments, completeAppointment, cancelAppointment} = useContext(TrainerContext)
  const {calculateAge, slotDateFormat, currency} = useContext(AppContext)

  useEffect(()=> {
    if (tToken) {
      getAppointments()
    }
  },[tToken])

  return (
    <div className='w-full max-w-6xl m-5'>

      <p className='mb-3 text-lg font-medium'>All Appointments</p>

      <div className='bg-white border rounded text-sm max-h-[80vh] min-h-[50vh] overflow-y-scroll'>
        <div className='max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-6 border-b'>
          <p>#</p>
          <p>Client</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Action</p>
        </div>

        {
          appointments.reverse().map((item, index)=>(
            <div 
              key={index} 
              className='flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50'
            >

              <p className='max-sm:hidden'>{index + 1}</p>

              <div className='flex items-center gap-2'>
                <img className='w-8 h-8 rounded-full object-contain' src={item.userData.image} alt="" />
                <p>{item.userData.name}</p>
              </div>

              <div>
                <p className='text-xs inline border border-primary px-3 rounded-full'>
                  {item?.payment ? "Online" : "CASH"}
                </p>
              </div>

              <p className='max-sm:hidden'>
                {isNaN(calculateAge(item.userData.dob)) ? '-' : calculateAge(item.userData.dob)}
              </p>
              <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
              <p>{currency} {item.amount}</p>

              {
                item.cancelled 
                ? <p className='text-red-500 text-xs font-medium'>Cancelled</p>
                : item.isCompleted 
                ? <p className='text-primary text-xs font-medium'>Completed</p>
                : <div className='flex'>
                    <img onClick={()=>cancelAppointment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" />
                    <img onClick={()=>completeAppointment(item._id)} className='w-10 cursor-pointer' src={assets.tick_icon} alt="" />
                  </div>

              }

            </div>
          ))
        }

      </div>

    </div>
  )
}

export default TrainerAppointment
