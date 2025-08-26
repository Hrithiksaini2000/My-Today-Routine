import { useState } from "react"
import "../Todo/Todo.css"
import { Todo_input } from "./Old_todo/Todo_input";
import { List } from "./Old_todo/Todo_list";
import { Date_Time } from "./Old_todo/Date_Time";
import { Localstoragegetitem, Locatstoragesetitem } from "./Old_todo/Todo_local_storage";


export const Todo = () => {
    // const [inputvalue, Setinputvalue] = useState('')
    const [task, setupdatetask] = useState(()=> Localstoragegetitem() )
    // const [datetime,setdatetime] = useState("")

    // const handleinputchange = (value) => {
    //     Setinputvalue(value)
    // }

    const handlesubmitform = (inputvalue) => {

        const {id,content, checked} = inputvalue

        // event.preventDefault()
        if (!content) return;
        const newmethod = task.find(
            (current_task)=> current_task.content===content
        )
        if(newmethod) return
        // if(task.includes(inputvalue)){
        //     // Setinputvalue("")
        //     return;
        // }
        setupdatetask((prevalue) => [...prevalue, {id,content,checked}])
        // Setinputvalue("")
    }

    // Add To Local storage 

    Locatstoragesetitem(task)
    // For Date and time

    // setInterval(() => {
    // const now = new Date()
    // const formatdate = now.toLocaleDateString()
    // const formattime = now.toLocaleTimeString()    
    // setdatetime(`${formatdate} - ${formattime}`)
    // }, 1000);

    // For Delete Task
    const deletetask=(value)=>{
        // const updatetask= task.filter(current_value => current_value === value)
        const updatetask= task.filter(current_value =>{
            return(
                current_value.content !== value
            )
        })
        setupdatetask(updatetask)
    }

    const cleartask=()=>{
        setupdatetask([])
    }
    
    const checktodo=(value)=>{
        const newcheck = task.map((current_task)=>{
            if(current_task.content === value){
                return {...current_task, checked: !current_task.checked}
            }else{
                return current_task
            }
        })
        setupdatetask(newcheck)
    }

    return (
        <section className="main-container">
            <h1 className="heading-center">Todo List</h1>
            {/* <h2 className="date-color">{datetime}</h2> */}
            <Date_Time/>
            <Todo_input onAddTodo={handlesubmitform}/>
            {/* <div className="form">
                <form className="form-flex" onSubmit={handlesubmitform}>
                    <div>
                        <input className="input-field" type="text" autoComplete="off" value={inputvalue} onChange={(event) => handleinputchange(event.target.value)} />
                    </div>
                    <div>
                        <button className="button-add">Add to Task</button>
                    </div>
                </form>
            </div> */}
            <div>
                <ul className="orderlist">
                    {
                        task.map((currentitem)=>{
                            return(
                            <List key={currentitem.id} data={currentitem.content} checked={currentitem.checked} onhandledelete={deletetask} onhandlecheck={checktodo}/>
                            )
                            {/* return(
                                <li key={index} className="task_list">
                                <span>{currentitem}</span>
                                <span className="check-color"><FaCheckCircle /></span>
                                <span className="delte-color" onClick={()=> deletetask(currentitem)}><MdDeleteForever /></span>
                                </li>
                            ) */}
                        })
                    }
                </ul>
            </div>
            <div>
                <button className="clear" onClick={cleartask}>Clear All</button>
            </div>
        </section>

    )
}