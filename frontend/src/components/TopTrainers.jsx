import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopTrainers = () => {

  const navigate = useNavigate();
  const { trainers } = useContext(AppContext);

  return (
    <div className='flex flex-col items-center gap-4 my-5 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-bold'>Top Trainers to Book</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of trusted trainers.
      </p>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-5 px-3 sm:px-0'>
        {trainers.slice(0, 10).map((item, index) => (
          <div
            onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0, 0)}}
            key={index}
            className='border border-border rounded-lg overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 bg-white text-left text-sm'
          >
            <div className='w-full h-48 flex justify-center items-center bg-background'>
              <img
                src={item.image}
                alt={item.name}
                className='h-full object-contain'
              />
            </div>
            <div className='p-3'>
              <div className='flex items-center gap-2 text-green-500 mb-1'>
                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                <p>Available</p>
              </div>
              <p className='font-medium text-lg'>{item.name}</p>
              <p className='text-gray-600'>
                {Array.isArray(item.speciality) 
                  ? JSON.parse(item.speciality).join(' | ') 
                  : JSON.parse(item.speciality)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button 
      onClick = {()=> { navigate('/trainers'); scrollTo(0, 0)}}
      className='mt-8 px-16 py-4 bg-primary text-white rounded-full hover:bg-hover transition'>
        More
      </button>
    </div>
  )
}

export default TopTrainers






