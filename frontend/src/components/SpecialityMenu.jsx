import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-28 text-gray-800' id='speciality'>
      <h1 className='text-3xl font-bold'>
        Find by Speciality
      </h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of trusted trainers, schedule your appointment hassle-free.
      </p>

      {/* Scrollable container */}
      <div className='w-full overflow-x-auto'>

        {/* Center wrapper */}
        <div className='flex justify-center'>

          {/* Scrollable flex */}
          <div 
            className='flex pt-5 px-4 gap-0' // no gap
            style={{
              minWidth: '100%',
              maxWidth: '1200px',
              overflowX: 'auto'
            }}
          >
            {specialityData.map((item, index) => (
              <Link 
                onClick={() => scrollTo(0, 0)}
                className='flex flex-col items-center text-sm cursor-pointer flex-shrink-0 sm:w-[25%] md:w-[20%] lg:w-[16.66%] px-4 hover:translate-y-[-10px] transition-all duration-500'
                key={index}
                to={`/trainers/${item.speciality}`}
              >
                <img className='w-16 sm:w-24 md:w-32 mb-2' src={item.image} alt={item.speciality} />
                <p className='text-center'>{item.speciality}</p>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default SpecialityMenu



















