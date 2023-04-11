---
title: React
date: 2023-04-09 14:00:00
order: 1
category:
  - 前端
  - 学习笔记
tag:
  - react
  - jsx
---

# React

## 1. 什么是 React

React 是一个用于构建用户界面的 JavaScript 库 核心专注于视图,目的实现组件化开发

## 2. 搭建 React 开发环境

```sh
npm install create-react-app -g
create-react-app react-app
cd react-app
npm start
```

## 3. JSX

### 什么是 JSX

- `JSX` 是一种 JS 和 HTML 混合的语法,将组件的结构、数据甚至样式都聚合在一起的写法
- `JSX` 其实只是一种语法糖，最终会通过 `babeljs` 转译成 `React.createElement` 语法
- `React.createElement` 会返回一个 React 元素
- `React元素` 事实上是普通的 JS 对象，用来描述你在屏幕上看到的内容
- `ReactDOM` 来确保浏览器中的真实 DOM 数据和 React 元素保持一致

```js
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const element = (
  <div className="title" style={{ color: "red" }}>
    <span>hello</span>
  </div>
);

root.render(element);
```

element 经过编译后为

::: tabs

@tab React18

```js
import { jsx as _jsx } from "react/jsx-runtime";
const element = _jsx("div", {
  className: "title",
  style: {
    color: "red",
  },
  children: _jsx("span", {
    children: "hello",
  }),
});
```

@tab React18 之前

```js
import React from "react";

React.createElement(
  "h1",
  {
    className: "title",
    style: {
      color: "red",
    },
  },
  React.createElement("span", null, "hello")
);
```

:::

返回的 React 对象为

```js
{
  "type": "div",
  "key": null,
  "ref": null,
  "props": {
    "className": "title",
    "style": {
      "color": "red"
    },
    "children": {
      "type": "span",
      "key": null,
      "ref": null,
      "props": {
        "children": "hello"
      },
      "_owner": null,
      "_store": {}
    }
  },
  "_owner": null,
  "_store": {}
}
```

## 4. 组件

- 可以将 UI 切分成一些独立的，可复用的组件，这样只需要专注于构建每一个单独的组件
- 组件从概念上类似于 `JavaScript` 函数，可以接受任意的入参，并返回用于描述页面展示内容的 `React` 元素

### 函数定义的组件

1. 函数组件接受一个属性对象，并返回一个 `React` 元素
2. 函数必须以大写字母开头，应为内部通过大小写判断是自定义组件还是默认组件(div span)
3. 函数组件在使用之前必须定义
4. 函数组件只能返回一个根元素

```js
import React from "react";
import ReactDOM from "react-dom";
function FunctionComponent(props) {
  return (
    <div className="title" style={{ color: "red" }}>
      <span>{props.title}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionComponent title="world" />);
```

### 类定义的组件

- 也可以通过类定义组件
- 类组件的渲染是根据属性创建类的实例，并调用实例的 `render` 方法返回一个 `React` 元素

```js
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

class ClassComponent extends React.Component {
  render() {
    return (
      <div className="title" style={{ color: "red" }}>
        <span>{this.props.title}</span>
      </div>
    );
  }
}

root.render(<ClassComponent title="world" />);
```

## 组件的更新

- 组件的数据来源有两个地方，分别是属性对象和状态对象
- 属性是父组件传递过来的，是不可变的
- 状态是自己内部的，改变状态唯一方式是 `setState`
- 属性和状态改变都会影响视图更新
- 不要直接修改 `state`，构造函数是唯一可以给 `this.state` 赋值的地方

```js
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

class ClassComponent extends React.Component {
  constructor(props) {
    super(props); // this.props = props

    this.state = { number: 0 }; // 设置默认状态，在构造函数中是唯一可以设置默认值的地方
  }

  handleClick = () => {
    // 除构造函数外不可直接修改 this.state
    // 需要通过 setState 来修改状态
    // 因为 setState 有一个副作用，修改完状态后会让组件重新刷新
    this.setState({
      number: this.state.number + 1,
    });
  };

  render() {
    return (
      <div>
        <p>number: {this.state.number}</p>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

root.render(<ClassComponent title="world" />);
```

## 合成事件和批量更新

- State 的更新会被合并 当你调用 setState() 的时候，React 会把你提供的对象合并到当前的 state
- State 的更新可能是异步的
  - 出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用
  - 因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态
  - 可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数
- 事件处理
  - React 事件的命名采用小驼峰式(camelCase),而不是纯小写
  - 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串
  - 你不能通过返回 `false` 的方式阻止默认行为。你必须显式的使用 `preventDefault`
- React 18 之前
  - 在函数里更新都是异步的，都是批量的
  - 在 setTimeout 里是同步的，非批量的
- React 18 之后
  - 不管是事件函数还是 setTimeout 中都是批量的
