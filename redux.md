## Redux

> Redux 是 Javascript 状态管理器

- 能够引起页面变化的数据 称之为"状态"（state）

## Redux 的三大原则

- **单一数据源** - 整个应用的 state 被存储在一颗 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。
- **state 是只读的** - 唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。
- **使用纯函数来执行修改** - 为了描述 action 如何让改变 state tree，你需要编写 reducers。

## Redux Flow

- Action Creators : 创建动作的函数
- Store : 把一些需要共享的数据放在仓库里面
- React Components : 从仓库中拿出数据使用
- Reducers : 纯函数 接收两个参数 上一次的数据和这一次的动作
  ![图片](https://upload-images.jianshu.io/upload_images/12201495-649ed8e1c66af6d3.jpg?imageMogr2/auto-orient/)
  > 页面从仓库拿出 state 数据 到组件上进行使用 改变仓库中的数据 经过 Action Creators 通过这个函数，函数帮我们创建动作 ，使用 dispatch(action)派发动作，动作被派发，首先是 reducers 拿到动作，reducers 这个函数接受两个参数(preciousState,action)上一次的数据和这一次的动作，根据动作和上一次的数据 返回一个全新的数据，这个数据交给 Store，Store 把自身之前的 state 做一个完整的替换 然后 Store 数据就发生了变化，然后组件再从仓库中拿数据去渲染

## 纯函数

纯函数的概念

1.  不能对参数进行修改
2.  相同的输入一定产生相同的输出
3.  不能有副作用。不能写异步代码

```js
const add = (a, b) => {
  return a + b;
};
```

## redux 的使用

### 使用步骤

1. yarn add redux
2. 创建 reducer 纯函数
3. 基于 reducer 创建 store
4. 在组件中 通过 stroe.getState() 获取 store 中 state 数据 并使用
5. 组件中要修改 store 的 state，需要调用 store.dispatch(action)派发一个动作，派发到了 reducer 这个纯函数里面。在纯函数中做相应的操作，返回最新的 state 数据。PS：store 的 state 发生了变化。组件不能得到更新。需要在组件中主动调用 store.subscribe()做一个订阅

## 动作类型常量

> 如果动作类型是字符串的话，一旦写错，效果出不来，并且不报错。导致调试困难。

1. store 目录下创建一个定义动作类型常量的文件 constants.js
2. constants.js 暴露出需要使用的常量
3. 修改 action type 并且修改 reducer 判断条件

## 动作生成器 actionCreates （异步操作的时候需要用上）
>通过方法返回动作对象
1. store 目录下创建一个动作生成器文件  actionCreates.js
2. actionCreates.js 暴露各种生成器的函数
3. 组件中调用store.dispatch(actionCreate())  //调用动作函数


##中间件
>在action到reducer的中间加入的一些额外的操作
>redux中间件的实现原理 是通过store.dispatch方法来实现的

#### redux-logger
>redux 日志中间件

1. 安装 yarn add redux-logger
2. 在createStore的地方 传递第二个参数 是一个applyMiddleware


#### redux-thunk
>redux 异步操作
>当项目中，使用了这款中间件之后又，我们的store.dispatch这个方法可以接受函数了
>当使用了这款中间件之后 如果传递给store.dispatch的参数是一个函数的话，那么这个函数会接收两个参数 一个是dispatch 一个是getState 这两个参数分别store里面同名方法的引用
```js
// 以前
store.dispatch({{type:"www"}});
// 现在 既支持对象的参数 又支持函数的参数
store.dispatch(fn1);
```
1. 安装 yarn add redux-thunk
2. 使用applyMiddleware 将其使用上

分析 redux-thunk 的源码
```js
let next = store.dispatch
store.dispatch = (action) => {
  // action 不能确定是普通东顾总对象还是函数动作对象
  if(typeof action === "function"){
    // 执行函数  并传递过去两个参数
    action(store.dispatch,store.getState)
  }else{
    next(action)
  }
}

```