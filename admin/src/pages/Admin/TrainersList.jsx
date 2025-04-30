import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const TrainersList = () => {

  const { trainers, aToken, getAllTrainers, changeAvailability } = useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getAllTrainers()
    }
  }, [aToken])

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-lg font-medium'>All Trainers</h1>

      <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
        {
          trainers.map((item, index) => (
            <div
              className='border border-indigo-200 rounded-xl w-56 overflow-hidden cursor-pointer group'
              key={index}
            >
              <div className='w-full h-48 flex justify-center items-center bg-background group-hover:bg-[#DDFCD2] transition-all duration-500'>
                <img
                  className='h-full object-contain'
                  src={item.image}
                  alt={item.name}
                />
              </div>

              <div className='p-4 text-sm'>
                <p className='text-neutral-800 text-lg font-medium'>{item.name}</p>
                <p className='text-zinc-600 text-sm'>
                  {Array.isArray(item.speciality)
                    ? JSON.parse(item.speciality).join(' | ')
                    : JSON.parse(item.speciality).join(' | ')}
                </p>

                <div className='mt-1 flex items-center gap-2 text-sm'>
                  <input
                    onChange={()=>changeAvailability(item._id)}
                    type='checkbox'
                    checked={item.available}
                    className='accent-green-400 w-4 h-4 cursor-default'
                  />
                  <p className='text-green-500 font-medium'>Available</p>
                </div>

              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TrainersList






