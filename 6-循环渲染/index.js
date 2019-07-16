import React, { Component } from "react";
import ReactDOM from "react-dom";

class Leon extends Component {
  render() {
    let list = ["apple", "banana", "orange"];

    // let result = [];
    // for (let i = 0; i < list.length; i++) {
    //   result.push(<li>{list[i]}</li>);
    // }
    return (
      <div>
        <h1>请选择你喜欢的水果</h1>
        <ul>
          {/* {result} */}
          {list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<Leon />, document.getElementById("app"));
