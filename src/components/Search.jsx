

const Search = ({ search, setSearch}) => {
  return (
    <div className="search">
        <h3>Pesquisar:</h3>
        <input type="text" value={search} onChange={ (e)=> setSearch(e.target.value)} placeholder="Pesquisar tarefa" />

    </div>
  )
}

export default Search