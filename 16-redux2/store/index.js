// 创建store实例
// 引入redux中的createStore
// 引入需要基于reducer
// 引入需要使用的中间件 applyMiddleware

import { createStore, applyMiddleware ,compose} from "redux";
import logger from "redux-logger"
import reducer from "./reducer";
import thunk from "redux-thunk"
// 调用createStore并传入reducer即可创建出store实例
// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
const composeEE = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 中间件的使用有一定的顺序，主要在于 logger中间件需要在最后调用
const store = createStore(reducer, composeEE(applyMiddleware(thunk,logger)));

// 将store实例暴露出去给组件使用
export default store;