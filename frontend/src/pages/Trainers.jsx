import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const Trainers = () => {

  const {speciality} = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)

  const navigate = useNavigate()

  const { trainers } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(
        trainers.filter((trainer) =>
          Array.isArray(trainer.speciality)
            ? trainer.speciality.includes(speciality)
            : trainer.speciality === speciality
        )
      );
    } else {
      setFilterDoc(trainers);
    }
  };

  useEffect(()=>{
    applyFilter()
  },[trainers, speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the trainers specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-secondary text-white' : ''}`} onClick={()=>setShowFilter(prev => !prev)}>Filters</button>
        <div className={`text-sm text-gray-600 ${showFilter ? 'grid grid-cols-2 gap-4' : 'hidden'} sm:flex sm:flex-col sm:gap-4`}>
          <p 
            onClick={()=> speciality === 'Personal Trainer' ? navigate('/trainers') : navigate('/trainers/Personal Trainer')} 
            className={`min-w-[200px] pl-4 py-3 pr-6 border border-border rounded-md transition-all cursor-pointer ${speciality === 'Personal Trainer' ? 'bg-background border-none font-semibold' : ''}`}>
            Personal Training
          </p>
          <p 
            onClick={()=> speciality === 'Strength Trainer' ? navigate('/trainers') : navigate('/trainers/Strength Trainer')} 
            className={`min-w-[200px] pl-4 py-3 pr-6 border border-border rounded-md transition-all cursor-pointer ${speciality === 'Strength Trainer' ? 'bg-background border-none font-semibold' : ''}`}>
            Strength Training
          </p>
          <p 
            onClick={()=> speciality === 'Cardio Trainer' ? navigate('/trainers') : navigate('/trainers/Cardio Trainer')}
            className={`min-w-[200px] pl-4 py-3 pr-6 border border-border rounded-md transition-all cursor-pointer ${speciality === 'Cardio Trainer' ? 'bg-background border-none font-semibold' : ''}`}>
            Cardio Training
          </p>
          <p
            onClick={()=> speciality === 'Mobility Trainer' ? navigate('/trainers') : navigate('/trainers/Mobility Trainer')} 
            className={`min-w-[200px] pl-4 py-3 pr-6 border border-border rounded-md transition-all cursor-pointer ${speciality === 'Mobility Trainer' ? 'bg-background border-none font-semibold' : ''}`}>
            Mobility Training
          </p>
          <p
            onClick={()=> speciality === 'Sports Trainer' ? navigate('/trainers') : navigate('/trainers/Sports Trainer')} 
            className={`min-w-[200px] pl-4 py-3 pr-6 border border-border rounded-md transition-all cursor-pointer ${speciality === 'Sports Trainer' ? 'bg-background border-none font-semibold' : ''}`}>
            Sports Training
          </p>
          <p
            onClick={()=> speciality === 'Rehabilitation Trainer' ? navigate('/trainers') : navigate('/trainers/Rehabilitation Trainer')} 
            className={`min-w-[200px] pl-4 py-3 pr-6 border border-border rounded-md transition-all cursor-pointer ${speciality === 'Rehabilitation Trainer' ? 'bg-background border-none font-semibold' : ''}`}>
            Rehabilitation
          </p>

          <p 
            onClick={()=> speciality === 'Martial Arts Trainer' ? navigate('/trainers') : navigate('/trainers/Martial Arts Trainer')}
            className={`min-w-[200px] pl-4 py-3 pr-6 border border-border rounded-md transition-all cursor-pointer ${speciality === 'Martial Arts Trainer' ? 'bg-background border-none font-semibold' : ''}`}>
            Martial Arts Training
          </p>

          <p
            onClick={()=> speciality === 'Group | Couple Trainers' ? navigate('/trainers') : navigate('/trainers/Group | Couple Trainers')} 
            className={`min-w-[200px] pl-4 py-3 pr-6 border border-border rounded-md transition-all cursor-pointer ${speciality === 'Group | Couple Trainers' ? 'bg-background border-none font-semibold' : ''}`}>
            Group | Couple Training
          </p>
          <p
            onClick={()=> speciality === 'Yoga Trainer' ? navigate('/trainers') : navigate('/trainers/Yoga Trainer')} 
            className={`min-w-[200px] pl-4 py-3 pr-6 border border-border rounded-md transition-all cursor-pointer ${speciality === 'Yoga Trainer' ? 'bg-background border-none font-semibold' : ''}`}>
            Yoga
          </p>
          <p
            onClick={()=> speciality === 'Nutrition Consulting' ? navigate('/trainers') : navigate('/trainers/Nutrition Consulting')} 
            className={`min-w-[200px] pl-4 py-3 pr-6 border border-border rounded-md transition-all cursor-pointer ${speciality === 'Nutrition Consulting' ? 'bg-background border-none font-semibold' : ''}`}>
            Nutrition Consulting
          </p>
              
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoc.map((item, index) => (
              <div
                onClick={()=>navigate(`/appointment/${item._id}`)}
                key={index}
                className='border border--lg rounded-lg overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 bg-white text-left text-sm'
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
                      ? item.speciality.join(' | ') 
                      : item.speciality}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Trainers
