import { useState } from 'react'
import './App.css'
import Todo from './components/Todo.jsx'
import TodoForm from './components/TodoForm'


function App() {
  const [todos, setTodos] = useState([

    {
      id: 1,
      task: "Estuda JavaScript",
      category: "Estudos",
      isCompleted:false,
    },

    {
      id:2,
      task:"Trabalha como Free",
      category:"Trabalho",
      isCompleted: false,
    },

    {
      id: 3,
      task: "Fazer exercicios fisico",
      category: "Pessoal",
      isCompleted:false,
    },

  ])

  const createTodo = (text, category) =>{

  }

  return (
  <div className='app'>
    <h1>Lista de Tarefas</h1>
   <div className='list-todo'>
     {todos.map((todo) =>(
      <Todo key={todo.id} todo = {todo} />
     ))}
   </div>
   <TodoForm></TodoForm>
  </div>
  )
}

export default App
