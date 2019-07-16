// React 表单

// input select

// 受控组件 非受控组件
// 1.受控组件 表单的数据完全由使用表单元素组件的state数据来进行控制的
// 2.非受控组件  表单的数据是不由state来控制 没有value
//    表单的数据是不由state来控制，通过ref给表单元素设置标是，后续通过this.refs.XXX去获取
//     1.普通标签上，这个标签真实dom对象
//     2.组件标签上，这个组件的实例对象
// ref是私有的 只对当前组件生效，同一个组件 有相同名字的ref 那么后面的会覆盖前面的
// 普通的输入框 需要有默认值 那么使用defaultValue
// 单选框或者复选框 需要使用defaultChecked

// 处理表单时候的一些建议
// 1.不要给所有的表单元素都绑定一个事件处理函数 而是可以只用一个就好了

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";

class BaseFrom extends Component {
  state = {
    username: "",
    password: "",
    sex: "1", //1-男 0-女
    cityId: "",
    isOk: false,
    cityList: []
  };
  render() {
    return (
      <div>
        <h1>注册</h1>
        <div>
          <label>
            <span>用户名：</span>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChg}
              placeholder="请输入用户用户名"
            />
          </label>
          <label>
            <span>密码：</span>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChg}
              placeholder="请输入用户密码"
            />
          </label>
          <label>
            <span>选择性别：</span>
            {/* checked 控制是否被默认选中 */}
            <input
              type="radio"
              name="sex"
              value="1"
              checked={this.state.sex === "1"}
              onChange={this.handleChg}
            />
            男
            <input
              type="radio"
              value="0"
              name="sex"
              onChange={this.handleChg}
              checked={this.state.sex === "0"}
            />
            女
          </label>
          <label>
            <span>请选择出生城市</span>
            <select
              value={this.state.cityId}
              name="cityId"
              onChange={this.handleChg}
            >
              <option disabled value="">
                请选择
              </option>
              {this.state.cityList.map(item => {
                return (
                  <option key={item.id} value={item.cityId}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </label>
          <label>
            <span>请同意我们的观点</span>
            <input
              type="checkbox"
              name="isOk"
              checked={this.state.isOk}
              onChange={this.handleChg}
            />
          </label>

          <button onClick={this.handleReg} disabled={this.isDisabled()}>
            提交注册
          </button>
        </div>
      </div>
    );
  }

  // 获取城市列表数据
  getCityList = () => {
    fetch("http://localhost:9090/cityList")
      .then(response => response.json())
      .then(res => {
        this.setState({
          cityList: res
        });
      });
  };

  // 通过他的返回值，来判断按钮是否需要禁用
  isDisabled = () => {
    if (
      this.state.username &&
      this.state.password &&
      this.state.sex &&
      this.state.cityId &&
      this.state.isOk
    ) {
      return false;
    }
    return true;
  };

  /* 
    统一处理当前代码中 表单相关数据
  */
  handleChg = event => {
    // 1.先拿出name
    console.log(event.target.name);
    let name = event.target.name;
    // 2.将相应的数据进行赋值 需要将checkbox 单独处理
    if (name === "isOk") {
      this.setState({
        isOk: !this.state.isOk
      });
    } else {
      this.setState({
        [name]: event.target.value
      });
    }
  };

  // handleChgisOk = () => {
  //   this.setState({
  //     isOk: !this.state.isOk
  //   });
  // };

  // handleChgUsername = event => {
  //   this.setState({
  //     username: event.target.value
  //   });
  // };

  // handleChgPassword = event => {
  //   this.setState({
  //     password: event.target.value
  //   });
  // };

  // handleChgSex = event => {
  //   this.setState({
  //     sex: event.target.value
  //   });
  // };

  // handleChgCityId = event => {
  //   this.setState({
  //     cityId: event.target.value
  //   });
  // };
  //提交数据
  handleReg = () => {
    // 接口地址：POST http://localhost:9090/user
    // 接口参数：username,password,sex:0 1  city:城市Id
    /* axios({
      method: "POST",
      url: "http://localhost:9090/user",
      body: {
        username: this.state.username,
        password: this.state.password,
        // sex: this.state.sex === "男" ? 1 : 0,
        sex: this.state.sex,
        city: this.state.cityId
      }
    }).then(response => {
      let res = response.data;
      console.log(res);
    }); */
    fetch("http://localhost:9090/users", {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        sex: parseInt(this.state.sex),
        city: this.state.cityId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(res => {
        console.log(res);
      });
  };

  componentDidMount() {
    // 获取城市列表
    this.getCityList();
  }
}
ReactDOM.render(<BaseFrom />, document.getElementById("app"));
