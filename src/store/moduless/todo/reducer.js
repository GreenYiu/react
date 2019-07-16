const initState = {
  name: "金库一枝花"
};

export default (state = initState, action) => {
  if (action.type === "CHANGE_NAME") {
    return Object.assign({}, state, {
      name: action.value
    });
  }
  return state;
};
