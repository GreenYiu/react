import React, { Component } from "react";
import ReactDOM from "react-dom";

// 1.需要让某个组件有state，目前这个组件一定是类组件
// 2.state初始化,一定要放置在构造函数里面
class Lain extends Component {
  // 构造函数
  constructor() {
    super(); //能够调用父类的构造函数 如果不去使用 this指向会是undefined
    this.state = {
      name: "王富贵",
      age: 19,
      counter: 0
    };
  }

  render() {
    console.log("render");
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={this.handleAdd.bind(this)}>点击 +5</button>
        <button onClick={this.handleAdd1.bind(this)}>点击 +5</button>

        <h1>我是王火鸡的爷爷</h1>

        <p>我的名字是：{this.state.name}</p>
        <p>我的年龄是：{this.state.age}</p>
        <Tils name={this.state.name} />
        <button onClick={this.handleClick.bind(this)}>修改为王火鸡</button>
      </div>
    );
  }

  handleAdd() {
    for (let i = 0; i < 5; i++) {
      this.setState({
        counter: this.state.counter + 1
      });
    }
  }

  handleAdd1() {
    // 将setSteta的第一个参数修改为函数，函数里面return对象，并且这个函数接收两个参数
    // 1.prevState,上一次的state 数据
    // 2.props     当前的props数据
    // for (let i = 0; i < 5; i++) {
    //   this.setState(function(prevState, props) {
    //     console.log(prevState);
    //     return {
    //       counter: prevState.counter + 1
    //     };
    //   });
    // }

    // () => ({})
    for (let i = 0; i < 5; i++) {
      this.setState((prevState, props) => ({
        counter: prevState.counter + 1
      }));
    }
  }

  handleClick() {
    // this指向问题
    // 不能直接修改state 需要使用setState()方法
    //  this.state.name = "王火鸡"
    // 第二个参数是一个回调函数 会等到真实DOM渲染完成后再去触发
    this.setState(
      {
        name: "王火鸡"
      },
      () => {
        console.log(this.state.name);
      }
    );

    // 在代码没有执行到render的时候，那么多次的setState()调用 会被react合并成一次去调用
  }
}

const Tils = props => {
  console.log("chidren render");
  return <p>hello - {props.name}</p>;
};

ReactDOM.render(<Lain />, document.getElementById("app"));
