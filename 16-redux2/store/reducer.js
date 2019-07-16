import * as constants from "./constants";

const initState = {
  todoInputVal: "",
  todos: []
};

export default (state = initState, action) => {
  if (action.type === constants.CHANGE_INPUT) {
    return Object.assign({}, state, { todoInputVal: action.value });
  }

  if (action.type === constants.TODO_ADD) {
    // 拿出todos中最后一个元素的id
    // let maxId = state.todos[state.todos.length - 1].id
    // let ids = state.todos.map(item => item.id);
    // // let maxId = Math.max.apply(null, ids);
    // let maxId = Math.max(...ids);
    // return Object.assign({}, state, {
    //   todos: [...state.todos, { id: maxId + 1, name: state.todoInputVal }]
    // });

    return Object.assign({}, state, {
      todos: [...state.todos, action.todo]
    });
  }

  if (action.type === constants.INIT_TODO) {
    return Object.assign({}, state, { todos: action.list });
  }

  if (action.type === constants.TODO_DEL) {
    return Object.assign({}, state, {
      todos: state.todos.filter(item => item.id !== action.value)
    });
  }

  return state;
};
