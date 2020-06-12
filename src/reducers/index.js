import counterReducer from "./counter";
import logReducer from "./logged";
import todoReducer from "./todo";
import { combineReducers } from "redux";

const rootreducer = combineReducers({
  count: counterReducer,
  log: logReducer,
  toDo: todoReducer
});

export default rootreducer;
