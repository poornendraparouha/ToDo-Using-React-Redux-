import { useState } from "react";
import "./NoteForm.css";
import { useDispatch } from "react-redux";
// import { AddNote } from "../../redux/actions/noteActions";
import { actions } from "../../redux/reducers/noteReducers";

function NoteForm() {
  const dispatch = useDispatch();
  const [noteText, setNoteText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // onCreateNote(notwText);
    dispatch(actions.add(noteText));
    setNoteText("");
  };

  return (
    <div className="container">
      
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
