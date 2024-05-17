import Formularios from "./components/Formularios";
import Todos from "./components/Todos"; 
import { useState } from "react";


const initialStateTodos = [
  {
    id: 1,
    title: "todo #1",
    description: "",
    state: false,
    priority: false
  },
  {
    id: 2,
    title: "todo #2",
    description: "",
    state: false,
    priority: true
  },
  {
    id: 3,
    title: "todo #3",
    description: "",
    state: false,
    priority: false
  },
] 

const App = () => {

    const [todos, setTodos] = useState(initialStateTodos);
    const addTodo = todo => (
      setTodos([...todos, todo])
    )

  return (
    <div className="container mb-2">
      <h1 className="my-5">formularios</h1>
      <Formularios addTodo={addTodo} />
      <Todos todos ={todos} />
    </div>
  )
}
export default App;