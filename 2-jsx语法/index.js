import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./assets/base.css";
//凡是在React中用到JSX代码的文件，都需要在文件开头引用React 

const name = "Joho";
//可以在{ }中放置任何有效的Javascript表达式
// element 是一个（虚拟DOM对象）又可以称为React元素
//js中没有JSX类型，JSX代码其实是对象
// const element = <h1>hello,{name}</h1>;

// vue中外层根元素可以使用template来包裹，为了不影响页面结构和样式
//react中可以使用空标签实现 或者 使用Fragment组件

// ReactDOM.render(element, document.getElementById("app"));
//空标签实现
/* ReactDOM.render(
  <>
    <h1>我的天</h1>
    <button>点我</button>
  </>,
  document.getElementById("app")
); */
// 使用Fragment组件
// 如何将这一个字符串渲染成html内容 使用<div dangerouslySetInnerHTML={{ __html: str }} />
const str = "<h1>我的天啊</h1>";
ReactDOM.render(
  <Fragment>
    <div dangerouslySetInnerHTML={{ __html: str }} />
    <h1>什么鬼</h1>
    <button>buibuibui</button>
    <img
      className="img"
      src="http://img2.imgtn.bdimg.com/it/u=3607034170,2257287290&fm=26&gp=0.jpg"
      alt=""
    />
    {/* style 要用 */}
    <p style={{ color: "green", fontSize: "20px" }}>华大哥</p>
    <label htmlFor="dada">点一点</label>
    <input type="text" id="dada" />
  </Fragment>,
  document.getElementById("app")
);
