import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const ListNewTodo = ({data,checked,ondel,onchk}) => {
    return (
        <li className="task_list">
            <span className={checked ? "checkedlist" : "notcheckedlist"}>{data}</span> 
            <span className="check-color" onClick={()=> onchk(data)}>
                <FaCheckCircle /></span>
            <span className="delte-color" onClick={() => ondel(data)}>
                <MdDeleteForever /></span>
        </li>
    )
}