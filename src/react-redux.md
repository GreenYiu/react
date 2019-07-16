## reacy-redux
>为了在react 中更好的去使用redux 提供的一个模块
? 使用了react-redux是否还需要使用redux？ 需要

##UI组件与容器组件
1. UI组件
纯页面渲染组件，不涉及到数据 所有的数据都是通过props获取的
2. 不渲染页面，主要处理数据，他跟仓库打交道 然后将数据传递给子组件（UI组件）

## 使用react-redux
1. 安装 yarn add react-redux
2. 提供一个供应商组件 放置在项目的最外层 并且将store作为prop设置上
3. 将容器组件删掉 使用 connect主动生成容器组件

容器组件 = connect(mapStateToProps,mapDispatchToProps)(UI组件)
```js
mapStateToProps = (state,propd) => {
  //state 是仓库的state数据 store.getState()
  //props是当前的props数据
  return{  //将数据传给了UI组件 在通过props拿取数据
    key:value,
  }
}
```

```js
mapDispatchToProps = (dispatch,props) => {
  // dispatch == store.dispatch
  return {
    key:value,  //key 是个方法
  }
}
```