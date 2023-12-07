const Filter = () => {
  return (
    <div className="filter">
        <h3>Filtar</h3>
        <div className="filter-options">
            <p>Estado:</p>
            <select >
                <option value="All">Todas</option>
                <option value="Completed">Completas</option>
                <option value="Incomplete">Incompletas</option>
            </select>
        </div>
    </div>
  )
}

export default Filter