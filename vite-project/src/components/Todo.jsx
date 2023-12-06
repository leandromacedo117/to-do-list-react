import React from 'react'
import "./css/Todo.css"

const Todo = ({todo}) => {
  return (
    <div className="todo">
     <div className="content">
       <p>{todo.task}</p>
       <p className='category'>({todo.category})</p>
     </div>
     <div className="button">
       <button className="complete">Completar</button>
       <button className = "remove">X</button>
     </div>
    </div>
  )
}

export default Todo