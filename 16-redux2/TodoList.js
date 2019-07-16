import React from "react";
import {
  createChgInput,
  createChgAdd,
  createInitTodo,
  getTodoList,
  getAddList,
  delTodos
} from "@/store/actionCreates";
import store from "@/store";

export default class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todoInputVal: store.getState().todoInputVal,
      todos: store.getState().todos
    };
    store.subscribe(() => {
      this.setState({
        todoInputVal: store.getState().todoInputVal,
        todos: store.getState().todos
      });
    });
  }

  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <div>
          <input
            type="text"
            value={this.state.todoInputVal}
            onChange={this.handleInput}
          />
          <button onClick={this.handleAdd}>ADD</button>
        </div>
        <ul>
          {this.state.todos.map(item => {
            return (
              <li key={item.id}>
                {item.name} <span onClick={() => {
                  this.handleDel(item.id)
                }}>🐷</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  handleInput(event) {
    let value = event.target.value;
    // console.log(value)
    store.dispatch(createChgInput(value));
  }

  // 添加一个todo
  handleAdd = () => {
    // 派发普通动作
    // store.dispatch(createChgAdd());
    // 派发函数动作
    store.dispatch(getAddList());
  };

  handleDel(id) {
    store.dispatch(delTodos(id));
  };

  // getTodoList = () => {
  //   fetch("http://localhost:3000/todos")
  //     .then(response => response.json())
  //     .then(res => {
  //       store.dispatch(createInitTodo(res));
  //     });
  // };

  componentDidMount() {
    // this.getTodoList();
    store.dispatch(getTodoList);
  }
}
