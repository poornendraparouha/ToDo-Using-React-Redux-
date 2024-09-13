// import * as redux from "redux";
// import { combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducers";
import {noteReducer} from "./reducers/noteReducers"
import { configureStore  } from "@reduxjs/toolkit";
import { notificationReducer } from "./reducers/notificationReducers";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";
// const result = combineReducers({
//     todoReducer,
//     noteReducer
// })
// export const store = redux.createStore(result);

export const store = configureStore({
    reducer: {
        todoReducer,
        noteReducer,
        notificationReducer
    },
    middleware:(getDefaultMiddleware) => [...getDefaultMiddleware(), loggerMiddleware]
})