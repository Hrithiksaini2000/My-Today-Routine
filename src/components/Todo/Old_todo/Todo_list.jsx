import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const List = ({checked,data, onhandledelete, onhandlecheck}) => {
    return (
        <li className="task_list">
            <span className={checked?"checkedlist":"notcheckedlist"}>{data}</span>
            <span className="check-color" onClick={() => onhandlecheck(data)} ><FaCheckCircle /></span>
            <span className="delte-color" onClick={() => onhandledelete(data)}><MdDeleteForever /></span>
        </li>
    )
}