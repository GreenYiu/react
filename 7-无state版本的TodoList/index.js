import React from "react";
import ReactDOM from "react-dom";
//babel转换之后会用react
//事件
const handelDEL = index => {
  list.splice(index, 1);
  ReactDOM.render(<Lain />, document.getElementById("app"));
};

const handleAdd = () => {
  console.log("add");
  let myInput = document.getElementById("myInput");
  let value = myInput.value;
  console.log(value);
  list.push(value);

  ReactDOM.render(<Lain />, document.getElementById("app"));
};

let list = [];
const Lain = () => {
  return (
    <div>
      <input type="text" id="myInput" />
      {/* 事件处理函数不要叫括号 加括号是在调用这个方法 */}
      {/* 方法没有返回值 默认undefined */}
      <button onClick={handleAdd}>ADD</button>

      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <span
                style={{ cursor: "pointer" }}
                onClick={index => {
                  handelDEL(index);
                }}
              >
                😡
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
ReactDOM.render(<Lain />, document.getElementById("app"));

// react页面中发生了响应，一定是state或者是props发生了变化才行
