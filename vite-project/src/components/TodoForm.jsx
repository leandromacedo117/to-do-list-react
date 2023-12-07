import {useState} from 'react'
import Todo from './todo'

const TodoForm = ({createTodo}) => {
  const [Value, setValue] = useState("")
  const [category, setCategory] = useState("")

  // will take care of the form submit
  const handlesSubmit = (e) =>{
    e.preventDefault()
  if(!Value || !category) return 
    console.log(Value, category)

    // executando função...
    createTodo(Value, category)

    // add Todo
    // clean
    setValue("")
    setCategory("")
  }


  

  return (
    <div className="todo-form">
      <h2>Criar Tarefa:</h2>
      <div className="form-content">
      <form onSubmit={handlesSubmit}>
        <input type="text"
         placeholder='Digite um Título'
         value={Value}
         onChange={(e) => setValue(e.target.value)} />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Estudos">Estudos</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Trabalho">Trabalho</option>
        </select>

        <button>Criar Tarefa</button>
      </form>
     </div> 
    </div>
  )
}

export default TodoForm