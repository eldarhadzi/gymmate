import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify';
import { AdminContext } from '../../context/AdminContext';
import axios from 'axios'

const AddTrainer = () => {

  const [trainerImg, setTrainerImg] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [experience, setExperience] = useState('1 Year')
  const [fees, setFees] = useState('')
  const [about, setAbout] = useState('')
  const [degree, setDegree] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')

  const [speciality, setSpeciality] = useState([]);

  // handle the submit button
  const { backendUrl, aToken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      
      if (!trainerImg) {
        return toast.error('Image Not Selected')
      }

      const formData = new FormData()

      formData.append('image', trainerImg)
      formData.append('name', name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('experience', experience)
      formData.append('fees', Number(fees))
      formData.append('about', about)
      formData.append('speciality', JSON.stringify(speciality))
      formData.append('degree', degree)
      formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))
      
      // console log formdata
      formData.forEach((value, key)=>{
        console.log(`${key} : ${value}`)
      })

      const {data} = await axios.post(backendUrl + '/api/admin/add-trainer', formData, {headers:{ aToken }})

      if (data.success) {
        toast.success(data.message)
        setTrainerImg(false);
        setName('');
        setEmail('');
        setPassword('');
        setExperience('1 Year');
        setFees('');
        setAbout('');
        setDegree('');
        setAddress1('');
        setAddress2('');
        setSpeciality([]);
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.error('Failed to submit trainer:', error);
      toast.error("Failed to add trainer. Please try again.");
    }
  }

  // handle speciality, prevent more than 3 checkboxes
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
  
    if (checked) {
      if (speciality.length < 3) {
        setSpeciality([...speciality, value]);
      } else {
        toast.warning("You can select up to 3 specialities.");
        e.target.checked = false;
      }
    } else {
      setSpeciality(speciality.filter(item => item !== value));
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='m-6 w-full'>
      <p className='mb-3 text-lg font-medium'>Add Trainer</p>

      <div className='bg-white px-8 py-8 border rounded w-full max-w-5xl max-h-[80vh] overflow-y-scroll'>
        <div className='flex items-center gap-4 mb-8 text-gray-600'>
          <label htmlFor="trainer-img">
            <img className='w-20 h-20 object-contain bg-gray-100 rounded-full cursor-pointer' src={trainerImg ? URL.createObjectURL(trainerImg) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setTrainerImg(e.target.files[0])} type="file" id='trainer-img' hidden />
          <p className='font-semibold'>Upload trainer <br /> picture</p>
        </div>

        <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
          <div className='w-full lg:flex-1 flex flex-col gap-4'>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Trainer Name</p>
              <input onChange={(e)=> setName(e.target.value)} value={name} className='border rounded px-3 py-2 ' type="text" placeholder='Your name' required/>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Trainer Email</p>
              <input onChange={(e)=> setEmail(e.target.value)} value={email} className='border rounded px-3 py-2 ' type="text" placeholder='Your email' required/>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Trainer password</p>
              <input onChange={(e)=> setPassword(e.target.value)} value={password} className='border rounded px-3 py-2 ' type="text" placeholder='Password' required/>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Experience</p>
              <select onChange={(e)=> setExperience(e.target.value)} value={experience} className='border rounded px-3 py-2 ' name="" id='' >
                <option value="1 Year">1 Year</option>
                <option value="2 Years">2 Years</option>
                <option value="3 Years">3 Years</option>
                <option value="4 Years">4 Years</option>
                <option value="5 Years">5 Years</option>
                <option value="6 Years">6 Years</option>
                <option value="7 Years">7 Years</option>
                <option value="8 Years">8 Years</option>
                <option value="9 Years">9 Years</option>
                <option value="10+ Years">10+ Years</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Fees</p>
              <input onChange={(e)=> setFees(e.target.value)} value={fees} className='border rounded px-3 py-2' type="number" placeholder='Your fees' required/>
            </div>
            
          </div>

          <div className='w-full lg:flex-1 flex flex-col gap-4'>

            <div className='flex-1 flex flex-col gap-1'>
            <p>Speciality (Maximum 3)</p>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <label className="flex items-center gap-3 p-2 border rounded-md cursor-pointer hover:bg-green-50 transition">
                <input
                  className="w-5 h-5 accent-green-500"
                  type="checkbox"
                  value="Personal Trainer"
                  checked={speciality.includes("Personal Trainer")}
                  onChange={handleCheckboxChange}
                />
                Personal Trainer
              </label>

              <label className="flex items-center gap-3 p-2 border rounded-md cursor-pointer hover:bg-green-50 transition">
                <input
                  className="w-5 h-5 accent-green-500"
                  type="checkbox"
                  value="Strength Trainer"
                  checked={speciality.includes("Strength Trainer")}
                  onChange={handleCheckboxChange}
                />
                Strength Trainer
              </label>

              <label className="flex items-center gap-3 p-2 border rounded-md cursor-pointer hover:bg-green-50 transition">
                <input
                  className="w-5 h-5 accent-green-500"
                  type="checkbox"
                  value="Sports Trainer"
                  checked={speciality.includes("Sports Trainer")}
                  onChange={handleCheckboxChange}
                />
                Sports Trainer
              </label>

              <label className="flex items-center gap-3 p-2 border rounded-md cursor-pointer hover:bg-green-50 transition">
                <input
                  className="w-5 h-5 accent-green-500"
                  type="checkbox"
                  value="Rehabilitation Trainer"
                  checked={speciality.includes("Rehabilitation Trainer")}
                  onChange={handleCheckboxChange}
                />
                Rehabilitation Trainer
              </label>

              <label className="flex items-center gap-3 p-2 border rounded-md cursor-pointer hover:bg-green-50 transition">
                <input
                  className="w-5 h-5 accent-green-500"
                  type="checkbox"
                  value="Mobility Trainer"
                  checked={speciality.includes("Mobility Trainer")}
                  onChange={handleCheckboxChange}
                />
                Mobility Trainer
              </label>

              <label className="flex items-center gap-3 p-2 border rounded-md cursor-pointer hover:bg-green-50 transition">
                <input
                  className="w-5 h-5 accent-green-500"
                  type="checkbox"
                  value="Cardio Trainer"
                  checked={speciality.includes("Cardio Trainer")}
                  onChange={handleCheckboxChange}
                />
                Cardio Trainer
              </label>

              <label className="flex items-center gap-3 p-2 border rounded-md cursor-pointer hover:bg-green-50 transition">
                <input
                  className="w-5 h-5 accent-green-500"
                  type="checkbox"
                  value="Yoga Trainer"
                  checked={speciality.includes("Yoga Trainer")}
                  onChange={handleCheckboxChange}
                />
                Yoga Trainer
              </label>

              <label className="flex items-center gap-3 p-2 border rounded-md cursor-pointer hover:bg-green-50 transition">
                <input
                  className="w-5 h-5 accent-green-500"
                  type="checkbox"
                  value="Group | Couple Trainers"
                  checked={speciality.includes("Group | Couple Trainers")}
                  onChange={handleCheckboxChange}
                />
                Group | Couple Trainers
              </label>

              <label className="flex items-center gap-3 p-2 border rounded-md cursor-pointer hover:bg-green-50 transition">
                <input
                  className="w-5 h-5 accent-green-500"
                  type="checkbox"
                  value="Nutrition Consulting"
                  checked={speciality.includes("Nutrition Consulting")}
                  onChange={handleCheckboxChange}
                />
                Nutrition Consulting
              </label>

              <label className="flex items-center gap-3 p-2 border rounded-md cursor-pointer hover:bg-green-50 transition">
                <input
                  className="w-5 h-5 accent-green-500"
                  type="checkbox"
                  value="Martial Arts Trainer"
                  checked={speciality.includes("Martial Arts Trainer")}
                  onChange={handleCheckboxChange}
                />
                Martial Arts Trainer
              </label>
            </div>
            <p className="text-sm text-gray-500 mt-1">{speciality.length}/3 selected</p>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Education</p>
              <input onChange={(e)=> setDegree(e.target.value)} value={degree} className='border rounded px-3 py-2 ' type="text" placeholder='Education' required/>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Address</p>
              <input onChange={(e)=> setAddress1(e.target.value)} value={address1} className='border rounded px-3 py-2 ' type="text" placeholder='Address 1' required/>
              <input onChange={(e)=> setAddress2(e.target.value)} value={address2} className='border rounded px-3 py-2 ' type="text" placeholder='Address 2' required/>
            </div>

          </div>
        </div>

        <div>
          <p className='mt-4 mb-2  text-gray-600'>About Trainer</p>
          <textarea onChange={(e)=> setAbout(e.target.value)} value={about} className='w-full px-4 pt-2 border rounded' placeholder='Write about trainer...' rows={5} required/>
        </div>

        <button type='submit' className='bg-primary text-white text-sm px-10 py-3 mt-1 rounded-full font-medium hover:bg-hover'>Add Trainer</button>

      </div>
    </form>
  )
}

export default AddTrainer
