import "./NoteList.css";
import { useSelector, useDispatch } from "react-redux";
// import { DeleteNote } from "../../redux/actions/noteActions";
import { actions, noteSelector } from "../../redux/reducers/noteReducers";

function NoteList() {
    // const notes=[];
    const notes = useSelector(noteSelector);
    const dispatch = useDispatch();

  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li key={index}>
            <p>{new Date(note.createdOn).toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger"
            onClick={() => dispatch(actions.delete(index))}>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
