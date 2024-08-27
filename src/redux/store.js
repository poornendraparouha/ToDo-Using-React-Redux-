import redux from "redux";
import { todoReducer } from "./reducers/todoReducers";

export const store = redux.createStore(todoReducer);