import { useState } from "react"

export const Date_Time=()=>{
     const [datetime,setdatetime] = useState("")
         setInterval(() => {
    const now = new Date()
    const formatdate = now.toLocaleDateString()
    const formattime = now.toLocaleTimeString()    
    setdatetime(`${formatdate} - ${formattime}`)
    }, 1000);
    return(
            <h2 className="date-color">{datetime}</h2>
    )
}