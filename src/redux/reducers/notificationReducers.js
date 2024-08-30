import { createSlice } from "@reduxjs/toolkit"
import { actions as noteActions } from "./noteReducers"
import { actions as todoActions } from "./todoReducers"

const initialState = {
    message:""
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        reset:(state, action) => {
            state.message = ""
        }
    },
    extraReducers: (builder) => {
        builder.addCase(todoActions.add,  (state, action) => {
            state.message = "New Todo Created!!";
        });
        builder.addCase(noteActions.add,  (state, action) => {
            state.message = "New Note Created!!";
        });
    }
    // extraReducers:{
    //     "todos/add":(state, action)=>{
    //         state.message = "New Todo Created!!";
    //     },
    //     "note/add":(state, action)=>{
    //         state.message = "New Note Created!!";
    //     }
    // }
})

export const notificationReducer = notificationSlice.reducer;
export const resetNotification =  notificationSlice.actions.reset;
export const notificatioSelector = (state) => state.notificationReducer.message;