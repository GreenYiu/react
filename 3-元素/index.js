import React, { Fragment } from "react";
import ReactDOM from "react-dom";

//react实现
/* function tick() {
  const element = (
    <div>
      <h1>hello,world</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("app"));
}
setInterval(tick, 1000); */

//原生js实现
let box = document.getElementById("app");

function tick() {
  let element = `
  <div>
  <h1>hello world</h1>
  <h2> It is ${new Date().toLocaleTimeString()} </h2>
  </div>
  `;
  box.innerHTML = element;
}
setInterval(tick, 1000);
