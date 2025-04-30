import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='flex md:flex-row flex-col-reverse 
    items-center justify-between text-left w-full px-8 border-t bg-white'>
      <div className='flex items-center gap-4 '>
        <div className="flex items-center space-x-2">
          <img onClick={()=> navigate('/')} src={assets.gymmate_logo} alt="Logo" className="hidden md:block w-40 cursor-pointer" />
        </div>
        <div className='hidden md:block h-7 w-px bg-gray-500/60'></div>
        <p className='py-4 text-center text-xs md:text-sm text-gray-500 w-full md:w-auto'>
          Copyright © 2025 GymMate - All Right Reserved.
        </p>
      </div>
      <div className='flex items-center gap-3 max-md:mt-4'>
        <a href="">
          <img src={assets.facebook_icon} alt="Facebook Icon" className='w-10 h-10' />
        </a>
        <a href="">
          <img src={assets.twitter_icon} alt="Twitter Icon" className='w-10 h-10' />
        </a>
        <a href="">
          <img src={assets.instagram_icon} alt="Instagram Icon" className='w-10 h-10' />
        </a>
      </div>
    </footer>
  )
}

export default Footer
