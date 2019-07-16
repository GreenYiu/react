import React, { Component } from "react";
import store from "./store";
import * as constants from "./store/constants";

console.log(store.getState()); //返回state对象

class App extends Component {
  constructor() {
    super();
    this.state = {
      storeName: store.getState().name
    };
    // 订阅仓库的变化
    store.subscribe(() => {
      console.log("仓库已经发生变化了");
      this.setState({
        storeName: store.getState().name
      });
    });
  }
  render() {
    return (
      <div>
        <h1>我是组件App2</h1>
        <p>仓库中的name 叫做：{this.state.storeName}</p>
        <button onClick={this.handleClick}>修改仓库中的name</button>
      </div>
    );
  }

  handleClick() {
    // 1. 定义action动作
    let action = {
      type: constants.CHANGE_NAME, //动作名字 动作类型
      value: "大金条"
    };

    // 2. 使用store.dispatch() 派发动作
    store.dispatch(action);
  }
}

export default App;
