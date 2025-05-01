import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify'

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currencySymbol = '$'
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [trainers, setTrainers] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):false)
    const [userData, setUserData] =useState(false)

    const getTrainersData = async () => {
        try {
            
            const {data} = await axios.get(backendUrl + '/api/trainer/list')
            if (data.success) {
                // Safely parse speciality field if it's a stringified array
                    const cleaned = data.trainers.map(trainer => {
                        let parsedSpeciality = trainer.speciality;
                    
                        if (typeof parsedSpeciality === 'string') {
                        try {
                            parsedSpeciality = JSON.parse(parsedSpeciality);
                        } catch (err) {
                            console.warn('Failed to parse speciality:', trainer.name);
                        }
                        }
                    
                        return {
                        ...trainer,
                        speciality: parsedSpeciality
                        };
                    });
                setTrainers(cleaned)
            } else {
                console.log(error)
                toast.error(data.message)
            }

        } catch (error) {
            console.log('Error: ', data.message)
            toast.error(error.message)
        }

    }

    const loadUserProfileData = async () => {
        try {

            const {data} = await axios.get(backendUrl + '/api/user/get-profile',{headers:{token}})
            if (data.success) {
                setUserData(data.userData)
            } else {
                toast.error(data.message)
            }
            
        } catch (error) {
            console.log('Error: ', data.message)
            toast.error(error.message)
        }
    }

    const value = {
        trainers, getTrainersData,
        currencySymbol,
        token, setToken,
        backendUrl,
        userData, setUserData,
        loadUserProfileData,
    }

    useEffect(()=>{
        getTrainersData()
    },[])

    useEffect(()=>{
        if (token) {
            loadUserProfileData()
        } else {
            setUserData(false)
        }
    },[])

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;