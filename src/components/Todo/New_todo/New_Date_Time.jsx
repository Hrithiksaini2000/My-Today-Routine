import { useState } from "react"

export const NewDate=()=>{
        const [datetime, newdatetime] = useState("")
            // For Date and time function 
        setInterval(()=>{
        const now = new Date()
        const formatdate = now.toLocaleDateString()
        const formattime = now.toLocaleTimeString()
        newdatetime(`${formatdate} - ${formattime}`)
        },1000)
    return(
            <h2 className="date-color">{datetime}</h2>
    )
}