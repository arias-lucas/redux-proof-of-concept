import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import todoListReducer from "./todoListReducer";

export default combineReducers({
  counter: counterReducer,
  list: todoListReducer
});
