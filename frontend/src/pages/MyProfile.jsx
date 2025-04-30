import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: 'Eldar Hadzovic',
    image: assets.profile_pic,
    email: '220208971@ostimteknik.edu.tr',
    phone: '+90 532 123 45 67',
    address: {
      line1: '57. Cadde, Kocatepe Mahallesi,',
      line2: 'Kilise Caddesi, Çankaya, Ankara',
    },
    gender: 'Male',
    dob: '2003-01-01',
  })

  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded-lg' src={userData.image} alt="User Profile Image" />
      {
        isEditing 
        ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4 pl-2 rounded-sm' type="text" value={userData.name} onChange={e => setUserData(prev => ({...prev, name:e.target.value}))} />
        : <p className='font-semibold text-3xl text-gymmate mt-4'>{userData.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email:</p>
          <p className='text-hover'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
            isEditing 
            ? <input className='bg-gray-100 max-w-52' type="text" value={userData.phone} onChange={e => setUserData(prev => ({...prev, phone:e.target.value}))} />
            : <p className='text-hover'>{userData.phone}</p>
          }
          <p className='font-medium'>Address:</p>
          {
            isEditing 
            ? <p>
              <input className='bg-gray-50' onChange={(e)=> setUserData(prev => ({...prev, address:{...prev.address, line1: e.target.value}}))} value={userData.address.line1} type="text" />
              <input className='bg-gray-50' onChange={(e)=> setUserData(prev => ({...prev, address:{...prev.address, line2: e.target.value}}))} value={userData.address.line2} type="text" />
            </p>
            : <p className='text-gray-400'>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          }
        </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {
            isEditing 
            ? <select className='max-w-20 bg-gray-100' onChange={(e)=> setUserData(prev => ({...prev, gender: e.target.value}))} value={userData.gender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            : <p className='text-gray-400'>{userData.gender}</p>
          }

          <p className='font-medium'>Birthday:</p>
          {
            isEditing 
            ? <input className='max-w-28 bg-slate-100' type="date" onChange={(e)=> setUserData(prev => ({...prev, dob: e.target.value}))} value={userData.dob} />
            : <p className='text-gray-400'>{userData.dob}</p>
          }

        </div>
      </div>

      <div className='mt-10'>
        {
          isEditing 
          ? <button className='border border-hover px-8 py-2 rounded-full hover:bg-primary hover:text-white hover:border-none transition-all' onClick={() => setIsEditing(false)}>Save information</button>
          : <button className='border border-hover px-8 py-2 rounded-full hover:bg-primary hover:text-white hover:border-none transition-all' onClick={() => setIsEditing(true)}>Edit</button>
        }
      </div>
    </div>        
  )
}


export default MyProfile
