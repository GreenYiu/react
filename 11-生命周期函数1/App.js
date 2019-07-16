import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "王富贵"
    };
    console.log("constructor");
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>我是App {this.state.fullName}</h1>
        {this.state.name}
      </div>
    );
  }
  // 执行多次
  // 必须要有返回值
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivrdStateFromProps");
    console.log(props);
    console.log(state);
    return {
      name: "李四",
      age: 18,
      fullName: props.firstName + "" + props.lastName
    };
  }
}

export default App;

// 1.react中的 生命周期 只存在于 类组件
