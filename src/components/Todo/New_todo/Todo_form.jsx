import { useState } from "react"

export const TodoForm=({onAddt})=>{
    const [inputve, setupdatev] = useState({})

    // Handle input value
    const handleinputc=(value)=>{
        setupdatev({id:value,content:value,checked:false})
    }

    const handlesubmitf=(event)=>{
        event.preventDefault()
        onAddt(inputve)
        setupdatev({id:"",content:"",checked:""})
    }
    return(
                    <div className="form">
                <form className="form-flex" onSubmit={handlesubmitf}>
                    <div>
                        <input className="input-field" autoComplete="off" type="text" value={inputve.content} onChange={(event)=> handleinputc(event.target.value)}/>
                    </div>
                    <div>
                        <button className="button-add">Add to Task</button>
                    </div>
                </form>
            </div>
    )
}