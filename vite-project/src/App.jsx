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

  // Create Task
  const createTodo = (task, category) =>{
    const newTodo = [...todos,
      {
      id : Math.floor(Math.random() * 10000),
      task,
      category,
      isCompleted : false,
    },
  ]

  setTodos(newTodo)
  }

  // remove task
  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodo = newTodos.filter(todo => todo.id !== id ? todo : null)
    setTodos(filteredTodo)
  }

  const completeTodo  = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }


  return (
  <div className='app'>
    <h1>Lista de Tarefas</h1>
   <div className='list-todo'>
     {todos.map((todo) =>(
      <Todo key={todo.id} todo = {todo} removeTodo = {removeTodo} completeTodo ={completeTodo} />
     ))}
   </div>
   <TodoForm createTodo = {createTodo}></TodoForm>
  </div>
  )
}

export default App
