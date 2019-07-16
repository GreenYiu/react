import React, { Component } from "react";
import store from "./store";

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
        <h1>我是组件App</h1>
        <p>仓库中的name 叫做：{this.state.storeName}</p>
      </div>
    );
  }
}

export default App;
