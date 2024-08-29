import * as redux from "redux";
import { combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducers";
import {noteReducer} from "./reducers/noteReducers"

const result = combineReducers({
    todos: todoReducer,
    notes: noteReducer
})
export const store = redux.createStore(result);