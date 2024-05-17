import { useState } from "react"
import Swal from 'sweetalert2'


const Formularios = ({addTodo}) => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    state: "pendiente",
    priority: false
  })

  const { title, description, state, priority } = todo;
 
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title.trim() || !description.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "titulo y description son campos obligatorios",
        
      })
    }
    addTodo({
      id: Date.now(),
      ...todo,
      state: state === "completado"
    }) 
    
        Swal.fire({
        position: "center",
        icon: "success",
        title: "Has completado el Formulario",
        showConfirmButton: false,
        timer: 1500
      });
    
  };


  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
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
          placeholder="Ingrese titulo"
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

        <button type="submit" className="btn btn-primary">Agregar Todo</button>


      </form>

    </>
  )
}
export default Formularios;