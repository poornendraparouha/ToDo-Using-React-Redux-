import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    message:""
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {

    },
    extraReducers:{
        "todos/add":(state, action)=>{
            state.message = "New Todo Created!!";
        }
    }
})

export const notificationReducer = notificationSlice.reducer;
export const notificatioSelector = (state) => state.notificationReducer.message;