import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { Todo } from './components/Todo/Todo.jsx'
import { NewTodo } from './components/Todo/New_todo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Todo/>
    {/* <NewTodo/> */}
  </StrictMode>,
)
