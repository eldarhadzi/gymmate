import React, { useContext, useEffect, useState } from 'react'
import { TrainerContext } from '../../context/TrainerContext'
import { AppContext } from '../../context/AppContext'
import axios from "axios"
import { toast } from "react-toastify"

const TrainerProfile = () => {

  const { tToken, profileData, setProfileData, getProfileData, backendUrl } = useContext(TrainerContext)
  const {calculateAge, currency} = useContext(AppContext)

  const [isEditing, setIsEditing] = useState(false)

  const updateProfile = async () => {
    try {

      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        available: profileData.available
      }

      const {data} = await axios.post(backendUrl + '/api/trainer/update-profile', updateData, {headers:{tToken}})

      if (data.success) {
        toast.success(data.message)
        setIsEditing(false)
        getProfileData()
      } else {
        toast.error(data.message)
      }

      
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  useEffect(()=>{
    if (tToken) {
      getProfileData()
    }
  },[tToken])

  return profileData && (
    <div>
      <div className='flex flex-col gap-4 m-5'>

        <div className="w-[250px] h-[250px] bg-background border-2 border-primary group-hover:bg-[#DDFCD2] rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-contain"
          src={profileData.image}
          alt=""
        />
        </div>

        <div className='flex-1 border border-stone-100  rounded-lg p-8 py-7 bg-white'>

          {/* Trainer Info: name, degree, experience */}

          <p className='flex items-center gap-2 text-3xl font-semibold text-gray-700'>{profileData.name}</p>

          <div className='flex items-center gap-2 mt-1 text-gray-600'>
            <p>{profileData.degree} - {Array.isArray(profileData.speciality)
                                        ? profileData.speciality.join(' | ')
                                        : profileData.speciality.join(' | ')}
                                    </p>
            <button className='py-1 px-2.5 border border-primary text-sm rounded-full'>{profileData.experience}</button>
          </div>

          {/* Trainer About */}

          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-neutral-900 mt-3'>About:</p>
            <p className='text-sm text-gray-600 max-w-[700px] mt-1'>
              {profileData.about}
            </p>
          </div>

          <p className='text-gray-600 font-medium mt-4'>
            Appointment fee: <span className='text-gray-900 text-md font-bold'>{currency} {isEditing ? <input type='number' onChange={(e)=>setProfileData(prev => ({...prev, fees: e.target.value}))} value={profileData.fees}/> : profileData.fees}</span>
          </p>

          <div className='flex gap-2 py-2'>
            <p>Address:</p>
            <p className='text-sm'>
              {isEditing ? <input type='text' onChange={(e)=>setProfileData(prev => ({...prev, address:{...prev.address, line1:e.target.value}}))} value={profileData.address.line1}/> :profileData.address.line1}
              <br />
              {isEditing ? <input type='text' onChange={(e)=>setProfileData(prev => ({...prev, address:{...prev.address, line2:e.target.value}}))} value={profileData.address.line2}/> :profileData.address.line2}
            </p>
          </div>

          <div className='mt-1 flex items-center gap-2 text-md'>
            <input 
              onChange={()=>isEditing && setProfileData(prev => ({...prev, available: !prev.available}))}
              checked={profileData.available}
              type="checkbox" 
              className='accent-green-400 w-5 h-5 cursor-default'/>
            <label className='text-green-500 font-semibold' htmlFor="">Available</label>
          </div>

          {
            isEditing
            ? <button onClick={updateProfile} className=' mt-4 border border-hover px-8 py-2 rounded-full hover:bg-primary hover:text-white hover:border-none transition-all'>Save information</button>
            : <button onClick={()=>setIsEditing(true)} className=' mt-4 border border-hover px-8 py-2 rounded-full hover:bg-primary hover:text-white hover:border-none transition-all'>Edit</button>
          }

        </div>

      </div>

    </div>
  )
}

export default TrainerProfile
