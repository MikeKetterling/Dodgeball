import {createContext, useState} from "react";


//Context
const AthleteContext = createContext();

//Provider
function AthleteProvider({children}) {
    const [allAthletes, setAllAthletes] = useState([])
    const [allTeams, setAllTeams] = useState([])

    return < AthleteContext.Provider value={{allAthletes, setAllAthletes, allTeams, setAllTeams}}>{children}</AthleteContext.Provider>
}

export {AthleteContext, AthleteProvider}