
// Action  constants
export const ADD_NOTE = "Add Note";
export const DELETE_NOTE = "Delete Note";

// Action craetors

export const AddNote = (text)=> ({text, type:ADD_NOTE})
export const DeleteNote = (index)=> ({index, type:DELETE_NOTE})