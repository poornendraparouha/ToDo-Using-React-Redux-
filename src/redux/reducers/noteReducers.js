// import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions" 
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: [
        { text: 'LLorem ipsum dolor sit amet, consectetur adipiscing elit.earn React', createdOn: new Date() },
        { text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', createdOn: new Date() },
        { text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', createdOn: new Date() },
    ]
}

// creating reducer using redux toolkit
const noteSlice = createSlice({
    name: 'note',
    initialState: initialState,
    reducers: {
        // This is add action
        add:(state, action)=>{
            state.notes.push({
                text: action.payload,
                createdOn: new Date()
            })
        },
        // This is delete action
        delete:(state, action)=>{
            state.notes.splice(action.payload, 1);
        }
    }
});
    // exporting reducer
export const noteReducer = noteSlice.reducer;
export const actions = noteSlice.actions;



// reducer using react redux
// export function noteReducer(state = initialState, action){
//     switch(action.type){
//         case ADD_NOTE: 
//             return {
//                 ...state, 
//                 notes: [
//                     ...state.notes, 
//                     {
//                     text : action.text,
//                     createdOn: new Date()
//                 }
//             ]
//         }
//         case DELETE_NOTE: 
//         state.notes.splice(action.index, 1)
//             return {
//                 ...state,
//                 notes: [...state.notes]
//             }
//         default: 
//             return state;
//     }
// }