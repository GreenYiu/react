import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//1.react组件没有全局组件和局部组件这样的情况
//2.react组件分为函数组件（无状态组件）与类组件（有状态组件）。状态的意思是组件是否有自身的数据
//3.组件必须要有组件的模板内容，函数组件必须要有return。类组件必须要有render方法并且return

//函数组件 组件的名字首字母要大写
// 函数组件接收唯一带有数据的props（属性）对象与并返回一个React元素 本质上是一个JavaScript函数
// 如果要渲染组件上的内容需要props.xxx
//  function Weer(props) {
//   return (
//     <div>
//       <h1>我的天啊</h1>
//       <span>{props.children}</span>
//     </div>
//   );
// }

// ReactDOM.render(<Weer>wofhksdfsk</Weer>, document.getElementById("app"));

// 类组件
// 类组件必须要继承React 基础组件
// 类组件必须要有render方法，并且在render方法中要有return
// class Weer extends Component {
//   render() {
//     return (
//       <div>
//         <h1>王富贵吃胖胖</h1>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Weer />, document.getElementById("app"));

// props
// 1. 将组件看成是一个方法 那么props 就是传递下去的参数对象
// 2. react的props 不需要在组件中定义
// 3. 函数式组件的参数，是一个pros
// 4. 类组件要获取 props 需要使用this.props
// const Lain = props => {
//   console.log(props);
//   return (
//     <div>
//       <h1>王富贵天天吃火鸡面</h1>
//       <span>id：{props.id}</span>
//       <p>title：{props.title}</p>
//       <p>{props.children}</p>
//     </div>
//   );
// };

// ReactDOM.render(
//   <Lain id="box" title="我的天">
//     我的天啊
//   </Lain>,
//   document.getElementById("app")
// );

// class Dada extends Component {
//   render() {
//     return (
//       <div>
//         <h1>王富贵又在吃火鸡面了</h1>
//         <p>id：{this.props.id}</p>
//         <p>title：{this.props.title}</p>
//         <p>bala：{this.props.children}</p>
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//   <Dada id="woo" title="我的天">
//     巴拉巴拉小魔仙变身 乌卡拉卡全身变
//   </Dada>,
//   document.getElementById("app")
// );

// props校验
// 1.需要引入一个额外的模块 prop-types
// 2.设置组件的propTypes属性

// class Lone extends Component {
//   render() {
//     return (
//       <div>
//         <h1>王富贵一直在吃火鸡面</h1>
//         <p>id：{this.props.id}</p>
//         <p>title：{this.props.title}</p>
//         <p>{this.props.children}</p>
//       </div>
//     );
//   }
// }

// // 这里的propTypes是固定的
// Lone.propTypes = {
//   id: PropTypes.string //规定id prop必须为string类型
// };
// //设置默认值
// Lone.defaultProps = {
//   name: "王富贵"
// };

// ReactDOM.render(
//   <div>
//     <Lone id="box" title="say">
//       最后变成了一直没有毛的火鸡
//     </Lone>
//     {/* <Dada id="file">baabala</Dada> */}
//   </div>,
//   document.getElementById("app")
// );

// react中的插槽的使用
// 1。react中没有插槽
// 2.要在组件内不同位置渲染出不同的react元素，需要主动设置为prop的方式
// const Bar = props => {
//   return (
//     <div>
//       {props.top}王富贵火鸡面吃完了{props.bottom}
//     </div>
//   );
// };

const Bar = ({ top, bottom }) => {
  return (
    <div>
      {top}王富贵火鸡面吃完了{bottom}
    </div>
  );
};
//组件的children必须要是一个react元素
Bar.propTypes = {
  children: PropTypes.element
};
ReactDOM.render(
  <Bar top={<p>我的天</p>} bottom={<p>我的地</p>}>
    <p>fhsjflsd</p>
  </Bar>,
  document.getElementById("app")
);
