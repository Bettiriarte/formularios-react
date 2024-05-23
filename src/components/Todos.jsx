import Registro from "./Registro";

const Todos = ({todos, deletes, update}) => {

  return (
    <div className="mt-5">
      <h2 className="text-center">Todos</h2>
      <ul className="list-group">
        {todos.map((registro) => (
          <Registro key= {registro.id} registro={registro} newDelete ={deletes} newUpdate={update}/>
        ))}
        {todos.length ===0 && (
          <h2 className="text-center">No tienes registros</h2>
        )}
      </ul>
    </div>
  )
}
export default Todos; 