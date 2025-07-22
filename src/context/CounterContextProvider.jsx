import CounterContext from "./CounterContext.jsx"
import { useEffect, useState } from "react"

const CounterContextProvider=({children})=>{
   
    const[username,setUsername]=useState("Sign up");

     useEffect(() => {
    const user = localStorage.getItem("username");
    if (user) {
      setUsername(user);
    }
  }, []);
   
    return(
        <CounterContext.Provider value={username}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterContextProvider;