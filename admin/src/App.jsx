import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddTrainer from './pages/Admin/AddTrainer';
import TrainersList from './pages/Admin/TrainersList';
import Footer from './components/Footer';
import { TrainerContext } from './context/TrainerContext';
import TrainerDashboard from './pages/Trainer/TrainerDashboard';
import TrainerAppointment from './pages/Trainer/TrainerAppointment';
import TrainerProfile from './pages/Trainer/TrainerProfile';

const App = () => {

  const { aToken } = useContext(AdminContext)
  const { tToken } = useContext(TrainerContext)

  return aToken || tToken ? (
    <div className='bg-dashboard'>
      <ToastContainer />
      <NavBar />
      <div className='flex items-start'>
        <SideBar />
        <Routes>

          {/* Admin Routes */}
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/add-trainer' element={<AddTrainer />} />
          <Route path='/trainer-list' element={<TrainersList />} />

          {/* Trainer Routes */}
          <Route path='/trainer-dashboard' element={<TrainerDashboard />} />
          <Route path='/trainer-appointments' element={<TrainerAppointment />} />
          <Route path='/trainer-profile' element={<TrainerProfile />} />

        </Routes>
      </div>
      <Footer />
      
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  )
}

export default App
