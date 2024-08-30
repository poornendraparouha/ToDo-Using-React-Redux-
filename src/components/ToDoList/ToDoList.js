import "./ToDoList.css";
import { useSelector, useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";
import { actions } from "../../redux/reducers/todoReducers";

function ToDoList({onToggle}) {
  const todos = useSelector((state)=> state.todoReducer.todos);
  const dispatch = useDispatch();
  // const todos = store.getState().todos


  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={todo.id}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
              onClick={()=>{dispatch(actions.toggle(index))}}
          // onClick={()=>{dispatch(toggleTodo(index))}}
          // onClick={()=>{onToggle(index)}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;

