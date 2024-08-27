import { useState } from "react";
import { Provider } from "react-redux";
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";
import { store } from "./redux/store";

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text, completed: false}]);
  };

  const toggleTodo = (index)=>{
    const list = [...todos];
    list[index].completed = !list[index].completed;
    setTodos(list);
  }

  return (
    <div>
      <h1>To Do App</h1>
      <Provider store={store}>
        <TodoForm onCreateTodo={createTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} />
      </Provider>
    </div>
  );
}

export default App;
