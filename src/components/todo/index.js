// import React, { Component } from "react";
// import store from "../../store";
// import UI from "./ui";

// export default class Todo extends Component {
//   state = {
//     name: store.getState().todo.name
//   };

//   render() {
//     return (
//       // <div>
//       //   <h1>{this.state.name}</h1>
//       // </div>
//       <UI name={this.state.name} />
//     );
//   }
// }

import React from "react";
import { connect } from "react-redux";
//  UI
const Todo = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <button onClick={props.handleChangName}>点我修改</button>
    </div>
  )
}

// 容器组件
export default connect((state) => {
  return {
    name:state.todo.name
  }
},
  // mapdispatchToProps
  (dispatch) => {
    return {
      handleChangName() {
        dispatch({
          type: "CHANGE_NAME",
          value:"银库老二"
        })
    }
  }
}
)(Todo)
