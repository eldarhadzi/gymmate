import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

  const navigate = useNavigate();

  return (
    <div className='flex bg-secondary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-28 md:mx-10 overflow-visible relative'>
      
      {/* ----- Left Side ----- */}
      <div className='flex-1 py-8 sm:py-10 md:py-14 lg:py-20 lg:pl-5'> 
        <div className='text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white'>
          <p>Book Appointment</p>
          <p className='mt-3'>With 100+ Trusted Trainers</p>
        </div>
        <button 
        onClick={()=>{navigate('/login'); scrollTo(0, 0)}}
        className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>
          Create Account
        </button>
      </div>

      {/* ----- Right Side ----- */}
      <div className='hidden md:block md:w-1/2 lg:w-[450px] relative'>
        <img 
          className='w-full absolute bottom-0 right-0 max-w-md' 
          src={assets.footer_image} 
          alt="Promotion Image" 
        />
      </div>

    </div>
  )
}

export default Banner

