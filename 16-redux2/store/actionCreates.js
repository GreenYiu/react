import * as constants from "./constants";

export const createChgInput = value => {
  return {
    type: constants.CHANGE_INPUT,
    value
  };
};

export const createChgAdd = todo => ({
  type: constants.TODO_ADD,
  todo
});

// 初始化todos的数据 ajax
export const createInitTodo = list => ({
  type: constants.INIT_TODO,
  list
});

export const createDel = (id) => ({
  type: constants.TODO_DEL,
  value:id
});


export const delTodos = (id) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method:"DELETE",
    }).then(response => response.json()).then(res => {
      console.log(res)
      dispatch(createDel(id));
    });
  }
}

export const getAddList = () => {
  return (dispatch, getState) => {
    fetch("http://localhost:3000/todos", {
      method: "POST",
      body: JSON.stringify({
        name: getState().todoInputVal
      }),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        dispatch(createChgAdd(res));
      });
  };
};

export const getTodoList = (dispatch, getState) => {
  fetch("http://localhost:3000/todos")
    .then(response => response.json())
    .then(res => {
      // store.dispatch(createInitTodo(res));
      dispatch(createInitTodo(res));
    });
};

// 使用redux-thunk的actionCreates里面的函数如何写
// 1.如果这个修改是同步的话 ，那么函数就返回一个普通动作对象
// 2.如果这个修改时异步的话，那么函数就返回一个函数（动作函数）会接收到dispatch，getState
