import { useState } from "react"
import "../Todo/Todo.css"
import { NewDate } from "./New_todo/New_Date_Time"
import { TodoForm } from "./New_todo/Todo_form"
import { ListNewTodo } from "./New_todo/List_Todo"
import { Localstorage_getitem, Localstoragesetitem } from "./New_todo/Local_Storage"

export const NewTodo = () => {
    // All States define
    const [task, setupdatetask] = useState(()=> Localstorage_getitem())

    // Handle task add and submit  
    const handlesubmitf=(inputve)=>{
        const {id,content,checked} = inputve
                if(!content) return
            const newm = task.find((current_item)=> current_item.content === content)
            if(newm) return
            setupdatetask((prevalue) => [...prevalue, {id,content,checked}])
    }
            // Local Storage Set Item
        Localstoragesetitem(task)
 // For delte handling
        const deleted=(value)=>{
           const updatetask= task.filter(curretask=>{
            return(
                curretask.content!==value
            )
            })
            setupdatetask(updatetask)
            
        }

        const checkedl =(value)=>{
            const newmethod = task.map((currenttask)=>{
                if(currenttask.content===value){
                    return{
                        ...currenttask, checked: !currenttask.checked
                    }
                }else{
                    return{
                        currenttask
                    }
                }
            })
            setupdatetask(newmethod)
        }
        // For clearall handling
        const clearall=()=>{
            setupdatetask([])
        }
    return (
        <section className="main-container">
            <h1 className="heading-center">My Daily Routine</h1>
            <NewDate/>
            <TodoForm onAddt={handlesubmitf}/>
            <div>
                <ul className="orderlist">
                    {
                        task.map((current_item)=>{
                            return(
                                <ListNewTodo key={current_item.id} data={current_item.content} checked={current_item.checked} ondel={deleted} onchk={checkedl} />
                            )
                        })
                    }
                </ul>
            </div>
            <div>
                <button className="clear" onClick={clearall}>Clear All</button>
            </div>
        </section>
    )
}