// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    todos: [
        // { text: 'Learn React', completed: true },
        // { text: 'Learn Redux', completed: false },
    ]
}

export const getInitialStateAsync = createAsyncThunk("todo/getInitialState",
    //  async (__, thunkAPI) => {
    // try {
    //     const res = await axios.get("http://localhost:4100/api/todos")
    //     thunkAPI.dispatch(actions.setInitialState(res.data));
    // } catch (error) {
    //     console.log(err);   
    // }
    // }
()=>{
    return axios.get("http://localhost:4100/api/todos")
}
)

// creating reducer using redux toolkit
const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        // setting initial state fatching from api
        setInitialState:(state, action)=>{
            state.todos = [...action.payload]
        },
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
    },

    extraReducers: (builder) => {
        builder.addCase(getInitialStateAsync.fulfilled, (state, action) => {
            console.log(" initial state is fulfilled");
            console.log(action.payload);
            state.todos = [...action.payload.data];
        });
    }
});
    // exporting reducer
export const todoReducer = todoSlice.reducer;
export const actions = todoSlice.actions;
export const todoSelector = (state)=> state.todoReducer.todos;


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