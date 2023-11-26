import React from 'react'

const Todo = ({todo}) => {
  return (
    <div className="todo">
     <div className="content">
       <p>{todo.task}</p>
     </div>
     <div className="button">
       <button className="complete">Completar</button>
       <button className = "remove">X</button>
     </div>
    </div>
  )
}

export default Todo