import Registro from "./Registro";

const Todos = ({todos}) => {
  return (
    <div className="mt-5">
      <h2 className="text-center">Todos</h2>
      <ul className="list-group">
        {todos.map((registro) => (
          <Registro key= {registro.id} registro={registro} />
        ))}
      </ul>
    </div>
  )
}
export default Todos; 