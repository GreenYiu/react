import React, { Component } from "react";
import ReactDOM from "react-dom";

class Lais extends Component {
  render() {
    let btn = null; //定义变量
    if (this.props.isLogin) {
      btn = <button>登出</button>; //给变量赋值  元素变量
    } else {
      btn = <button>登录</button>;
    }

    let p = null;
    if (this.props.name) {
      p = <p>欢迎你{this.props.name}</p>;
    } else {
      p = null;
    }
    return (
      <div>
        王氏集团后台管理系统
        {btn}
        {this.props.name ? <p>欢迎你{this.props.name}</p> : null}
        {/* {p} */}
        {/* <p>欢迎你{this.props.name}</p> */}
        {/* {this.props.isLogin ? <button>登出</button> : <button>登录</button>} */}
      </div>
    );
  }
}

ReactDOM.render(
  <Lais isLogin={true} name="王富贵" />,
  document.getElementById("app")
);
