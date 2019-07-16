import * as constants from "./constants"
// 这个文件就是 reducer 纯函数

// 纯函数的概念
// 1.不能对参数进行修改
// 2.相同的输入一定产生相同的输出
// 3.不能有副作用。不能写异步代码

/* *
  1.项目仓库的reducer函数会默认执行一遍  实现仓库数据的初始化工作
  2.必须要有返回值
  3. 默认进入的时候，state是undefined，所以给他赋值了一个默认值
  4.后续再次进入

  state  是上一次仓库中的state数据
  action 是这一次的动作对象
* */
// 定义仓库的初始化state数据
const initState = {
  name: "我是仓库老大"
};

export default (state = initState, action) => {
  // let state = state || initState  ==>state = initState es6语法 传了值就是state 没有传就是initstate
  console.log(state); //undefined
  console.log(action);

  // 判断动作的type 来处理数据
  // 1.展开运算符
  if (action.type === constants.CHANGE_NAME) {
    //   return {...state,...{name:"王二狗"}}
    // 2. 合并
    // return Object.assign(state, {name:"王二狗"})  不推荐
    return Object.assign({}, state, { name: action.value });
  }
  return state;
};
