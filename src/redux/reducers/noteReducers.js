import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions" 

const initialState = {
    notes: [
        { text: 'LLorem ipsum dolor sit amet, consectetur adipiscing elit.earn React', createdOn: new Date() },
        { text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', createdOn: new Date() },
        { text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', createdOn: new Date() },
    ]
}

export function noteReducer(state = initialState, action){
    switch(action.type){
        case ADD_NOTE: 
            return {
                ...state, 
                notes: [
                    ...state.notes, 
                    {
                    text : action.text,
                    createdOn: new Date()
                }
            ]
        }
        case DELETE_NOTE: 
        state.notes.splice(index, 1)
            return {
                ...state,
                notes: state.notes
            }
        default: 
            return state;
    }
}