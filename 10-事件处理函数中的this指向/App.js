import React, { Component } from "react";

class Children extends React.PureComponent {
  render() {
    console.log("child");
    return (
      <div>
        <h1>我是chidl组件</h1>
        <p>我的名字是：{this.props.name}</p>
        <button
          onClick={() => {
            this.props.onFn1("王二小");
          }}
        >
          调用爸爸给我的onFn1
        </button>
      </div>
    );
  }
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "王富贵",
      childName: "王小鬼"
    };
  }
  render() {
    console.log("app");
    return (
      <div>
        <h1>我是App组件</h1>
        <p>我的中文名是 {this.state.name}</p>
        <button onClick={this.handleClick.bind(this)}>点我修改name</button>
        <hr />

        <Children name={this.state.childName} onFn1={this.handleFn1} />
      </div>
    );
  }

  handleClick() {
    this.setState({
      name: "王翠花"
      // childName: "王小❀"
    });
  }

  handleFn1 = name => {
    this.setState({
      name: name
    });
  };
}
//父祖家render 那么子组件一定会render
// 有个性能优化的处理 父组件render的时候 如果子组件没有变化 那么不希望子组件也render
// 在react中 我们可以让组件不要继承于Component。而是继承PureComponent基础组件，那么就能实现上面的改良

// PureComponent 在组件内部 通过计算，如果上一次的props数据跟这次的props数据一样，那么他就会组织这个组件render
