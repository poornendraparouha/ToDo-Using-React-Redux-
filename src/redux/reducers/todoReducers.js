// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";
import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    todos: [
        { text: 'Learn React', completed: true },
        { text: 'Learn Redux', completed: false },
    ]
}

// creating reducer using redux toolkit
const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        // This is add action
        add:(state, action)=>{
            state.todos.push({
                text: action.payload,
                completed: false
            })
        },
        // This is toggle action
        toggle:(state, action)=>{
            state.todos.map((todo, i)=>{
                if(i === action.payload){
                    todo.completed = !todo.completed; 
                }
                return todo;
            })

        }

    }
});
    // exporting reducer
    export const todoReducer = todoSlice.reducer;


// Reducer using Redux

// export function todoReducer(state = initialState, action){
//     switch(action.type){
//         case ADD_TODO: 
//             return {
//                 ...state, 
//                 todos: [
//                     ...state.todos, 
//                     {
//                     text : action.text,
//                     completed : false
//                 }
//             ]
//         }
//         case TOGGLE_TODO: 
//             return {
//                 ...state,
//                 todos: state.todos.map((todo, i)=>{
//                     if(i === action.index){
//                           todo.completed = !todo.completed 
//                     }
//                     return todo
//                 })

//             }
//         default: 
//             return state;
//     }
// }