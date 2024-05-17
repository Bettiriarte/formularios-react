const Registro = ({ registro }) => {

  const { title, description, state, priority, id } = registro;

  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h5 className={`${state && "text-decoration-line-through"}`}> {title} </h5>
          <p className= {`${state && "text-decoration-line-through"}`}> {description} </p>
          <div className="d-flex gap-2">
            <button className="btn btn-sm btn-danger"> Eliminar </button>
            <button className="btn btn-sm btn-warning"> Actualizar </button>
          </div>
        </div>
        <span className="badge text-bg-primary">{priority && "prioritario"} </span>
      </div>
    </li>
  )
}
export default Registro;