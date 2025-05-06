import { createContext, useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify'

export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '')
    const [trainers, setTrainers] = useState([])
    const [appointments, setAppointments] = useState([])
    const [dashData, setDashData] = useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const getAllTrainers = async () => {
        try {

            const {data} = await axios.post(backendUrl + '/api/admin/all-trainers', {}, {headers:{aToken}})
            if (data.success) {
                setTrainers(data.trainers)
                console.log(data.trainers)
            } else {
                toast.error(data.message)
            }
            
        } catch (error) {
            console.error("Error fetching trainers:", error); 
        toast.error(error.message || "Something went wrong");
        }
    }

    const changeAvailability = async (trainerId) => {
        try {

            const { data } = await axios.post(backendUrl + '/api/admin/change-availability', {trainerId}, {headers:{aToken}})

            if (data.success) {
                toast.success(data.message)
                getAllTrainers()
            } else {
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
        }
    }

    const getAllAppointments = async () => {
        try {

            const { data } = await axios.get(backendUrl + '/api/admin/appointments', {headers:{aToken}})

            if(data.success) {
                setAppointments(data.appointments)
                console.log(data.appointments)
            } else {
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
        }
    }

    const cancelAppointment = async (appointmentId) => {
        try {

            const {data} = await axios.post(backendUrl + '/api/admin/cancel-appointment', {appointmentId}, {headers:{aToken}})

            if (data.success) {
                toast.success(data.message)
                getAllAppointments()
            } else {
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
        }
    }

    const getDashData = async () => {
        try {

            const {data} = await axios.get(backendUrl + '/api/admin/dashboard', {headers:{aToken}})

            if (data.success) {
                setDashData(data.dashData)
                console.log(data.dashData)
            } else {
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
        }
    }

    const value = {
        aToken, setAToken,
        backendUrl, trainers, getAllTrainers,
        changeAvailability,
        appointments, setAppointments, getAllAppointments,
        cancelAppointment, getDashData, dashData
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )

}

export default AdminContextProvider
