const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter">
        <h3>Filtrar:</h3>
        <div className="filter-options">
            <div>
                <p>Estado:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div className="ordem">
                <h4>Ordem alfabética</h4>
                <div>
                    <button>A-Z</button>
                    <button>Z-A</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filter