import { useState } from "react";
import "./NoteForm.css";
import { useDispatch, useSelector } from "react-redux";
// import { AddNote } from "../../redux/actions/noteActions";
import { actions } from "../../redux/reducers/noteReducers";
import { notificatioSelector, resetNotification } from "../../redux/reducers/notificationReducers";

function NoteForm() {
  const dispatch = useDispatch();
  const [noteText, setNoteText] = useState("");
  const message = useSelector(notificatioSelector)

  if(message){
    setTimeout(()=>{
      dispatch(resetNotification())
    }, 5000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // onCreateNote(notwText);
    dispatch(actions.add(noteText));
    setNoteText("");
  };

  return (
    <div className="container">
      {message && <div class="alert alert-success" role="alert">
        {message}
        </div> }
      
    <form onSubmit={handleSubmit}>
      <textarea
        type="text"
        className="form-control mb-3"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Note</button>
    </form>
    </div>
  );
}

export default NoteForm;
