import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelativeTrainers = ({speciality, trainerId}) => {

    const {trainers} = useContext(AppContext)
    const navigate = useNavigate()

    const [relTrainer, setRelTrainer] = useState([])

    useEffect(() => {
      if (trainers.length > 0 && speciality) {
        const inputSpecialities = Array.isArray(speciality) ? speciality : [speciality];
    
        const trainersData = trainers
          .filter((trainer) => {
            if (trainer._id === trainerId) return false;
    
            const trainerSpecialities = Array.isArray(trainer.speciality) ? trainer.speciality : [trainer.speciality];
    
            // Keep trainers with at least one matching speciality
            return trainerSpecialities.some(s => inputSpecialities.includes(s));
          })
          .map((trainer) => {
            const trainerSpecialities = Array.isArray(trainer.speciality) ? trainer.speciality : [trainer.speciality];
    
            const matchCount = trainerSpecialities.filter(s => inputSpecialities.includes(s)).length;
            const totalSpecialities = trainerSpecialities.length;
    
            // Perfect match means: matches all selected specialties (even if trainer has extra specialties)
            const isPerfectMatch = matchCount === inputSpecialities.length;
    
            return { ...trainer, matchCount, totalSpecialities, isPerfectMatch };
          })
          .sort((a, b) => {
            // 1. Perfect match first
            if (a.isPerfectMatch && !b.isPerfectMatch) return -1;
            if (!a.isPerfectMatch && b.isPerfectMatch) return 1;
    
            // 2. More matched specialities first
            if (b.matchCount !== a.matchCount) {
              return b.matchCount - a.matchCount;
            }
    
            // 3. Less total specialities better (prefer trainers with less overall specialities if match count equal)
            if (a.totalSpecialities !== b.totalSpecialities) {
              return a.totalSpecialities - b.totalSpecialities;
            }
    
            // 4. Otherwise do nothing special (keep as is)
            return 0;
          });
    
        setRelTrainer(trainersData);
      }
    }, [trainers, speciality, trainerId]);

  return (
    <div className='flex flex-col items-center gap-4 my-5 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-bold'>Relative Trainers</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of trusted trainers.
      </p>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-5 px-3 sm:px-0'>
        {relTrainer.slice(0, 5).map((item, index) => (
          <div
            onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0, 0)}}
            /*key={index}*/ key={item._id}
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
              <div className={`flex items-center gap-2 ${item.available ? 'text-green-500' : 'text-red-500'}  mb-1`}>
                <div className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-red-500'} rounded-full`}></div>
                <p>{item.available ? "Available" : "Not Available"}</p>
              </div>
              <p className='font-medium text-lg'>{item.name}</p>
              <p className='text-gray-600'>
                {Array.isArray(item.speciality) 
                  ? item.speciality.join(' | ') 
                  : item.speciality}
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

export default RelativeTrainers
