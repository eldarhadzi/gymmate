import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { TrainerContext } from '../context/TrainerContext'

const SideBar = () => {

  const {aToken} = useContext(AdminContext)
  const {tToken} = useContext(TrainerContext)

  return (
    <div className='min-h-screen bg-white border-r'>
      {
        aToken && <ul className='text-[#515151] mt-5'>

          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 sm:px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F1FFEC] border-r-4 border-primary' : ''}`} to={'/admin-dashboard'}>
            <img src={assets.home_icon} alt="" />
            <p className='hidden md:block'>Dashboard</p>
          </NavLink>

          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 sm:px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F1FFEC] border-r-4 border-primary' : ''}`} to={'/all-appointments'}>
            <img src={assets.appointment_icon} alt="" />
            <p className='hidden md:block'>Appointments</p>
          </NavLink>

          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 sm:px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F1FFEC] border-r-4 border-primary' : ''}`} to={'/add-trainer'}>
            <img src={assets.add_icon} alt="" />
            <p className='hidden md:block'>Add Trainer</p>
          </NavLink>

          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 sm:px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F1FFEC] border-r-4 border-primary' : ''}`} to={'/trainer-list'}>
            <img src={assets.people_icon} alt="" />
            <p className='hidden md:block'>Trainers List</p>
          </NavLink>

        </ul>
      }

      {
        tToken && <ul className='text-[#515151] mt-5'>

          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 sm:px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F1FFEC] border-r-4 border-primary' : ''}`} to={'/trainer-dashboard'}>
            <img src={assets.home_icon} alt="" />
            <p className='hidden md:block'>Dashboard</p>
          </NavLink>

          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 sm:px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F1FFEC] border-r-4 border-primary' : ''}`} to={'/trainer-appointments'}>
            <img src={assets.appointment_icon} alt="" />
            <p className='hidden md:block'>Appointments</p>
          </NavLink>

          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 sm:px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F1FFEC] border-r-4 border-primary' : ''}`} to={'/trainer-profile'}>
            <img src={assets.people_icon} alt="" />
            <p className='hidden md:block'>Profile</p>
          </NavLink>

        </ul>
      }

    </div>
  )
}

export default SideBar
