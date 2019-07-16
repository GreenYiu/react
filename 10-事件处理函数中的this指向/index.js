import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";

// class App extends Component {
//   // 第三种 ： 构造函数方式
//   constructor() {
//     super();
//     // this.handleClick == this.handleClick.bind(this);
//   }

//   render() {
//     this.fn1();
//     return (
//       <div>
//         <h1>事件处理函数</h1>
//         {/* 第一种 ： .bind(this)方式 */}
//         {/* <button onClick={this.handleClick.bind(this)}>点我</button> */}
//         {/*第二种 : 箭头函数方式 */}
//         {/*    <button
//           onClick={event => {
//             this.handleClick(event);
//           }}
//         >
//           点我
//         </button> */}
//         {/*第三种 ： 构造函数方式  */}
//         {/* <button onClick={this.handleClick}>点我</button> */}

//         <button onClick={this.handleClick}>点我</button>
//       </div>
//     );
//   }

//   // 事件处理函数 也是一个函数 只是绑定在某个事件上
//   // 事件处理函数的this指向默认是undefined
//   /*  handleClick(event) {
//     console.log(this); //undefined
//     console.log(event);
//   } */

//   //实验性质
//   handleClick = () => {
//     console.log(this);
//   };

//   // 普通函数 不存在this指向问题  谁调用的this就指向谁  没有事件对象event
//   fn1() {
//     // this  App组件的实例对象
//     console.log(this);
//   }
// }

ReactDOM.render(<App />, document.getElementById("app"));
