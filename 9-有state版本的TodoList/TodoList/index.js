//todolist组件
import React, { Component } from "react";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [], //todos
      inputVal: "" //输入框内容
    };
  }

  render() {
    // 解构赋值的方式 this.state.todos == {todos} = this.state
    let { todos, inputVal } = this.state;
    return (
      <div>
        <div>
          {/* input的value值与inputVal这个state绑定起来
            1.给input设置value属性，属性值使用inputVal这个state
            2.给input设置onChange属性，事件 值是一个事件处理函数然后再事件处理函数中主动修改inputVal这个state
        */}
          <input
            type="text"
            value={inputVal}
            onChange={this.handleChange.bind(this)}
          />
          <button onClick={this.handleAdd.bind(this)}>Add</button>
        </div>
        <ul>
          {todos.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <span onClick={this.handleDel.bind(this)}>👎</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  /* 
input框 onChange事件
event 默认会自动传递过来的事件对象，合成对象
*/
  handleChange(event) {
    // 取出当前input框的value值
    let value = event.target.value;
    // 2.给inputVal这个state赋值
    this.setState({
      inputVal: value
    });
  }

  handleAdd() {
    //这一种方法 改变了之前的state
    /* let newTodos = [...this.state.todos];
    // 这一种方法 没有改变了之前的state
    let newTodos = JSON.parse(JSON.stringify(this.state.todos));//深拷贝
    newTodos.push(this.state.inputVal);

    this.setState({
      todos: newTodos
    }); */

    // 后面的state不能改变之前的state
    this.setState({
      // 把之前的todos展开到一个新的数组里面，再在这个新的数组里面添加inputVal
      todos: [...this.state.todos, this.state.inputVal]
    });
  }

  handleDel(index) {
    let newTodos = [...this.state.todos];
    newTodos.splice(index, 1);
    this.setState({ todos: newTodos });
  }
}

export default TodoList;
