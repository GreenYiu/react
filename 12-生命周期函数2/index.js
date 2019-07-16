import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class List extends React.Component {
  state = {
    list: []
  };
  render() {
    return (
      <ul id="box">
        {this.state.list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    );
  }

  setList() {
    // this.setState({
    //   list: ["第一条数据"]
    // });
    let i = 0;
    setInterval(() => {
      i++;
      this.setState({
        list: [`第${i}条数据`, ...this.state.list]
      });
    }, 100);
  }

  componentDidMount() {
    this.setList();
  }

  /* getSnapshotBeforeUpdate() {
    console.log("BeforeUpdate");
    // 获取真实DOM
    let box = document.getElementById("box");

    // 1.得到scrollTop
    let scrollTop = document.documentElement.scrollTop;
    return scrollTop;
  } */

  componentDidUpdate(prevProps, prevState, snapahot) {
    // 2. 设置scrollTop
    // 得到新增的条数
    // let num = this.state.list.length - prevState.list.length;
    // let height = num * 31;
    // document.documentElement.scrollTop = snapahot + height;

    // 获取真实DOM
    let box = document.getElementById("box");
    // 用内容高度减去可视区域的高度
    document.documentElement.scrollTop =
      box.scrollHeight - document.documentElement.clientHeight;
  }
}
ReactDOM.render(<List />, document.getElementById("app"));

// 1.数据更新，时刻让滚动条都处于底部

// 1. beforeUpdate这个函数里面得到更新之前的scrollTop，然后传递给DIdUpdate
