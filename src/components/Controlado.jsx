import { useState } from "react"


const Controlado = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    state: "pendiente",
    priority: false
  })
  const[error, setError] = useState("")
const {title, description, state, priority} = todo;

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, description, state, priority)

    if (!title.trim() || !description.trim() || !state.trim() || !priority.trimp()) 
      return setError("todos los campos son obligatorios ")
  }

  const handleChange = (e) => {
    const {name,type, checked, value} = e.target;
    setTodo({
      ...todo,
      [name]: type === 'checkbox' ? checked : value,
    })
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese todo"
          className="form-control mb-2"
          name="title"
          value={title}
          onChange={handleChange}
        // onChange={e => console.log(e.target.value)}
        />
        <textarea
          className="form-control mb-2"
          placeholder="ingrese descripcion"
          name="description"
          value={description}
          onChange={handleChange}
        // onChange={e =>console.log(e.target.value)}
        />
        < select
          className="form-select mb-2"
          name="state"
          value={state}
          onChange={handleChange}>
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>

        <div className="form-check mb2">
          <input
            type="checkbox"
            name="priority"
            className="from-check-input"
            id="inputcheck"
            checked={priority}
            onChange={handleChange}
          />
          <label htmlFor="inputcheck">mantener datos</label>
        </div>

        <button type="submit" className="btn btn-primary">Procesar</button>


      </form>
      {
        error !== "" && error
      }
    </>
  )
}
export default Controlado;