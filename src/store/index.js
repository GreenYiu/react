import { createStore, combineReducers, compose } from "redux";
import todoReducer from "./moduless/todo/reducer";

const composeEnxxx = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default createStore(
//   combineReducers({
//   todo:todoReducer
// }),
// composeEnxxx()
// )
export default createStore(
  combineReducers({
    todo: todoReducer
  }),
  composeEnxxx()
);
