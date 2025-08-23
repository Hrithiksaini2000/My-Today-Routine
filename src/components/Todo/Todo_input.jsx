import { useState } from "react"
export const Todo_input = ({onAddTodo})=>{
    const [inputvalue, Setinputvalue] = useState({})
        const handleinputchange = (value) => {
        Setinputvalue({id:value,content:value,checked:false})
    }

    const handlesubmitform=(event)=>{
        event.preventDefault()
        onAddTodo(inputvalue)
        Setinputvalue({id:"",content:"",checked:false})
    }
    return(
                    <div className="form">
                <form className="form-flex" onSubmit={handlesubmitform}>
                    <div>
                        <input className="input-field" type="text" autoComplete="off" value={inputvalue.content} onChange={(event) => handleinputchange(event.target.value)} />
                    </div>
                    <div>
                        <button className="button-add">Add to Task</button>
                    </div>
                </form>
            </div>
    )
}