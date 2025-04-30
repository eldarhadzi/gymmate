import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

  const { aToken, setAToken } = useContext(AdminContext)

  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
  }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
      <div onClick={()=>navigate('/')} className='flex items-center gap-2 text-xs'>
        <img className='pr-1 w-40 sm:w-48 cursor-pointer' src={assets.dashboard_logo} alt="" />
        <p className='border px-3 py-1 mt-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ? 'Admin' : 'Trainer'}</p>
      </div>
      <button onClick={logout} className='bg-primary text-white text-sm px-10 py-3 rounded-full font-medium hover:bg-hover'>Logout</button>
    </div>
  )
}

export default NavBar
