import { useState } from "react";
import "./ToDoForm.css";
import { useDispatch, useSelector} from "react-redux";
// import { AddTodo } from "../../redux/actions/todoActions";
import { actions } from "../../redux/reducers/todoReducers";
import { notificatioSelector, resetNotification } from "../../redux/reducers/notificationReducers";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const message = useSelector(notificatioSelector)

  if(message){
    setTimeout(()=>{
      dispatch(resetNotification())
    }, 5000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // onCreateTodo(todoText);
    // dispatch(AddTodo(todoText));
    dispatch(actions.add(todoText));
    setTodoText("");
  };

  return (
    <div className="container">
      {message && <div class="alert alert-success" role="alert">
        {message}
        </div> }
      
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Todo</button>
    </form>
    </div>
  );
}

export default ToDoForm;
