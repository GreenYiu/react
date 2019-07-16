# React 事件处理函数的 this 指向问题

###区分普通函数和事件处理函数

1. 普通函数就是直接调用的，不存在 this 指向问题，谁调用的 this 就指向谁。
2. 普通函数没有事件对象 event
3. 事件处理函数其实也是一个函数，只是他绑定在某个事件上
4. 事件处理函数的 this 默认指向 undefined

### 解决 this 指向问题的 4 种办法

1. 直接在事件绑定的地方加上.bind(this)

```js
<button onClick={this.handleClick.bind(this)}>点我</button>
```

2. 是用箭头函数

```js
<button
  onClick={event => {
    this.handleClick(event);
  }}
>
  点我
</button>
```

3. 在构造函数中统一进行 this 指向的绑定

```js
 constructor() {
    super();
    this.handleClick == this.handleClick.bind(this);
  }

  render(){
    return {
        <button onClick={this.handleClick}>点我</button>
    }
  }
```

4. 使用实验性质的 public class fileds 语法 要去使用的话 现需要 babel 插件的支持
   1. 安装 @babel/plugin-proposal-class-properties 插件
   2. 去 babel 的配置文件中
   3. 重新启动项目

```js
<button onClick={this.handleClick}>点我</button>;

handleClick = () => {
  console.log(this);
};
```

## 为什么要使用 bind 来修改 this 指向，而不能使用 apply，call？

因为 apply 和 call 会直接执行函数，而 bind 会返回一个新的函数

## 在调用子组件的时候，需要传递一个方法下去，这时这个方法的 this 绑定推荐使用哪几种

推荐使用：在构造函数中的 bind 与 public class fileds 语法

1. 父祖件 render 那么子组件一定会 render
2. 有个性能优化的处理 父组件 render 的时候 如果子组件没有变化 那么不希望子组件也 render
3. 在 react 中 我们可以让组件不要继承于 Component。而是继承 PureComponent 基础组件，那么就能实现上面的改良

4. PureComponent 在组件内部 通过计算，如果上一次的 props 数据跟这次的 props 数据一样，那么他就会阻止这个组件 render

```js
<Children onFn1={this.handleFn1.bind(this)} />
// 由于.bind()方法每次都会返回一个新的函数 所以这种方式不推荐
```

```js
<Children onFn1={() => {this.handleFn1})} />
// 由于每次执行这行代码 都会返回一个新的对象，所以这种方式不推荐
```

```js
coustructor() {
  super();
  this.handleFn1 = this.handleFn1.bind(this)
}
<Children onFn1={ {this.handleFn1}} />
// 由于coustructor构造函数只会执行一次，后续执行到Children的代码，传递过去的onFn1没有发生变化 推荐这种方式
```

```js
<Child onFn1={this.handleFn1}  />
handleFn1 = () => {
  ...
}
// 这种方式同样也推荐。
```
