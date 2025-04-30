import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Trainers from './pages/Trainers'
import About from './pages/About'
import Contact from './pages/Contact'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Login from './pages/Login'
import Appointment from './pages/Appointment'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <NavBar />

      <Routes>
        <Route  path='/' element={<Home />} />
        <Route  path='/trainers' element={<Trainers />} />
        <Route  path='/trainers/:speciality' element={<Trainers />} />
        <Route  path='/login' element={<Login />} />
        <Route  path='/about' element={<About />} />
        <Route  path='/contact' element={<Contact />} />
        <Route  path='/my-appointments' element={<MyAppointments />} />
        <Route  path='/my-profile' element={<MyProfile />} />
        <Route path='/appointment/:trainerId' element={<Appointment />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App

