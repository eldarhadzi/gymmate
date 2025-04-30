import { createContext } from "react";

export const TrainerContext = createContext()

const TrainerContextProvider = (props) => {
    const value = {

    }

    return (
        <TrainerContext.Provider value={value}>
            {props.children}
        </TrainerContext.Provider>
    )

}

export default TrainerContextProvider