import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "张",
      lastName: "三"
    };
  }
  render() {
    return (
      <div>
        <App firstName={this.state.firstName} lastName={this.state.lastName} />
        <button
          onClick={() => {
            this.setState({
              firstName: "李"
            });
          }}
        >
          点我
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("app"));
