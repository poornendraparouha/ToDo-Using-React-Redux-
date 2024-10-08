import "./ToDoList.css";
import { useSelector, useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";
import { actions, getInitialStateAsync } from "../../redux/reducers/todoReducers";
import { todoSelector } from "../../redux/reducers/todoReducers";
import { useEffect } from "react";
// import axios from "axios";

function ToDoList() {
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();
  // const todos = store.getState().todos


  useEffect(()=>{
    dispatch(getInitialStateAsync());

    //fatching data using fatch function
    // fetch("http://localhost:4100/api/todos")
    // .then(res => res.json())
    // .then(parsedJson => {
    //   console.log(parsedJson)
    // })

    // fatching data using axios library { moved this to the todo reducer in asyncthunk function}
    //   axios.get("http://localhost:4100/api/todos")
    //   .then(res => {
    //     console.log(res.data);
    //     dispatch(actions.setInitialState(res.data));
    //   })
  },[dispatch]);


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

