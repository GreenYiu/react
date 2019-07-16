// 创建stroe 实例的文件

// 1. 引入 redux 中的createStore
// 2. 引入需要基于的reduer 函数
import { createStore } from "redux";
import reducer from "./reducer";

// 3. 调用 createStore并传入reducer即可创建出store的实例
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 4. 将store实例暴露出去 给组件去使用
export default store;
