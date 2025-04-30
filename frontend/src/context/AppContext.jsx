import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify'

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currencySymbol = '$'
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [trainers, setTrainers] = useState([])

    const value = {
        trainers,
        currencySymbol
    }

    const getTrainersData = async () => {
        try {
            
            const {data} = await axios.get(backendUrl + '/api/trainer/list')
            if (data.success) {
                setTrainers(data.trainers)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        getTrainersData()
    },[])

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;