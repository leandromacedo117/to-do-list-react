import React from 'react'
import "./css/Todo.css"

const todo = ({todo , removeTodo, completeTodo}) => {
  return (
    <div className="todo" style={{textDecoration : todo.isCompleted  ? "line-through" : ""}}>
     <div className="content">
       <p>{todo.task}</p>
       <p className='category'>({todo.category})</p>
     </div>
     <div className="button">
       <button className="complete" onClick={ () => completeTodo(todo.id)}>Completar</button>
       <button className = "remove" onClick={ () => removeTodo(todo.id)}>X</button>
     </div>
    </div>
  )
}

export default todo