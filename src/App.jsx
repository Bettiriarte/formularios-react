import Formularios from "./components/Formularios";
import Todos from "./components/Todos";
import { useEffect, useState } from "react";


const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || [];

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = todo => (
    setTodos([...todos, todo])
  );

  const deleteTodo = id => {
    const newArray = todos.filter(todo => todo.id !== id)
    setTodos(newArray)
  };

  const updateTodo = id => {
    const newArray = todos.map((todo) => {
      if (todo.id === id) {
        todo.state = !todo.state;
      }
      return todo;
    });
    setTodos(newArray)

  };
  const orderTodo = (arrayTodos) => {
    return arrayTodos.sort((a, b) => {
      if (a.priority === b.priority) return 0
      if (a.priority === true) return -1
      if (a.priority === false) return 1

    })
  };

  return (
    <div className="container mb-2">
      <h1 className="my-5">Crear Todo</h1>
      <Formularios addTodo={addTodo} />
      <Todos
        todos={orderTodo(todos)}
        deletes={deleteTodo}
        update={updateTodo}

      />
    </div>
  )
}
export default App;