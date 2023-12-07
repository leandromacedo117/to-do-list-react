

const Search = ({ search, setSearch}) => {
  return (
    <div className="search">
        <h3>Pesquisa:</h3>
        <input type="text" value={search} onChange={ (e)=> setSearch(e.target.value)} placeholder="Pesquisar tarefa" />

    </div>
  )
}

export default Search