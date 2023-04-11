---
title: 实现简单的React
date: 2023-04-09 17:51:00
order: 1
category:
  - 前端
  - 学习笔记
  - 架构
tag:
  - react
  - jsx
---

# 实现简单的 React

## 1. 搭建 React 开发环境

```sh
npm install create-react-app -g
create-react-app react-app
cd react-app
npm start
```

## 2. 修改 React 环境变量

```sh
npm install cross-env -D
```

修改 `package.json`，`DISABLE_NEW_JSX_TRANSFORM=true` 表示禁用新版的 JSX 转换器，React18 开始使用新版的转换器

```json{3-4}
{
  "scripts": {
    "start": "cross-env DISABLE_NEW_JSX_TRANSFORM=true react-scripts start",
    "build": "cross-env DISABLE_NEW_JSX_TRANSFORM=true react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

## 3. 项目目录

## 4. JSX 编译

### src/index.js

切换至本地创建的 react 文件

```js
import React from "./react";
import ReactDOM from "./react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const element = (
  <div className="title" style={{ color: "red" }}>
    <span>hello</span>
  </div>
);

root.render(element);
```

### src/constants.js

定义常量元素类型

```js
//这表示React元素类型  div span
export const REACT_TEXT = Symbol("REACT_TEXT");
//代表文本类型 数字也可能是一个字符串
export const REACT_ELEMENT = Symbol("react.element");
```

### src/utils.js

统一将元素处理为对象

```js
import { REACT_TEXT } from "./constants";
/**
 * 为了后续处理方便，把元素做了一下封装，主要就是给字符串和数字进行了处理，变成一个对象的形式
 * @param {*} element
 * @returns
 */
export function wrapToVdom(element) {
  return typeof element === "string" || typeof element === "number"
    ? { type: REACT_TEXT, props: element }
    : element;
}
```

### src/react.js

仿照 React 对象格式，生成元素对象

```js
import { wrapToVdom } from "./utils";
import { REACT_ELEMENT } from "./constants";
/**
 * 根据参数，返回一个React元素
 * @param {*} type 元素的类型 div span
 * @param {*} config 配置对象 className style
 * @param {*} children 后面所有参数都是children,children可能有，也可能没有，可能有一个，也可能有多个
 */
function createElement(type, config, children) {
  let ref;
  let key;
  if (config) {
    delete config.__source;
    delete config.__self;
    ref = config.ref;
    delete config.ref;
    key = config.key;
    delete config.key;
  }
  let props = { ...config };
  if (arguments.length > 3) {
    props.children = Array.prototype.slice.call(arguments, 2).map(wrapToVdom);
  } else {
    props.children = wrapToVdom(children);
  }
  return {
    $$typeof: REACT_ELEMENT,
    type,
    ref,
    key,
    props,
  };
}
const React = {
  createElement,
};
export default React;
```

### src/react-dom/client.js

根据元素对象生成真实 dom，并渲染到页面上

```js
import { REACT_TEXT } from "../constants";
/**
 * 把虚拟DOM变成真实的DOM并且插入到container容器里
 * @param {*} vdom
 * @param {*} container
 */
function mount(vdom, container) {
  // 传进去虚拟DOM，返回真实DOM
  const newDOM = createDOM(vdom);
  // 将真实DOM渲染到父级节点中;
  container.appendChild(newDOM);
}

//把虚拟DOM变成真实的DOM
function createDOM(vdom) {
  const { type, props } = vdom;
  let dom;
  // 如果此虚拟DOM类型是一个文本节点 string number
  if (type === REACT_TEXT) {
    dom = document.createTextNode(props);
  } else {
    dom = document.createElement(type); //原生组件
  }
  // 判断属性的类型，因为对于元素的话，props是对象，对于文本节点而言，它的props就是文本本身
  if (typeof props === "object") {
    updateProps(dom, {}, props);
    if (props.children) {
      // 如果是独生子的话，把独生子的虚拟DOM转换真实DOM插入到DOM节点上
      if (typeof props.children === "object" && props.children.type) {
        mount(props.children, dom);
      } else if (Array.isArray(props.children)) {
        reconcileChildren(props.children, dom);
      }
    }
  }
  return dom;
}

function reconcileChildren(childrenVdom, parentDOM) {
  for (let i = 0; i < childrenVdom.length; i++) {
    mount(childrenVdom[i], parentDOM);
  }
}
/**
 * 更新DOM元素的属性
 * 1.把新的属性全部赋上去
 * 2.把老的属性在新的属性对象没有删除掉
 */
function updateProps(dom, oldProps = {}, newProps = {}) {
  for (let key in newProps) {
    // children属性会在后面单独处理
    if (key === "children") {
      continue;
    } else if (key === "style") {
      // 把样式对象上的所有属性都赋给真实DOM
      let styleObject = newProps[key];
      for (const attr in styleObject) {
        dom.style[attr] = styleObject[attr];
      }
    } else {
      //如果是其它属性，则直接赋值
      dom[key] = newProps[key];
    }
  }
  for (let key in oldProps) {
    if (!newProps.hasOwnProperty(key)) {
      dom[key] = null;
    }
  }
}
class DOMRoot {
  // container 根节点
  constructor(container) {
    this.container = container;
  }
  // 将虚拟dom渲染到根节点
  render(vdom) {
    mount(vdom, this.container);
  }
}

function createRoot(container) {
  return new DOMRoot(container);
}

const ReactDOM = {
  createRoot,
};

export default ReactDOM;
```

## 函数组件

### src/index.js

使用函数返回一个组件

```js{6-14}
import React from "./react";
import ReactDOM from "./react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function FunctionComponent(props) {
  return (
    <div className="title" style={{ color: "red" }}>
      <span>{props.title}</span>
    </div>
  );
}

root.render(<FunctionComponent title="world" />);
```

### src/react-dom/client.js

创建真实元素的时候，判断虚拟 dom 的 `type` 为 `function`

```js{8-9,28-35}
// 把虚拟DOM变成真实的DOM
function createDOM(vdom) {
  const { type, props } = vdom;
  let dom;
  // 如果此虚拟DOM类型是一个文本节点 string number
  if (type === REACT_TEXT) {
    dom = document.createTextNode(props);
  } else if (typeof type === "function") {
    return mountFunctionComponent(vdom);
  } else {
    dom = document.createElement(type); //原生组件
  }
  // 判断属性的类型，因为对于元素的话，props是对象，对于文本节点而言，它的props就是文本本身
  if (typeof props === "object") {
    updateProps(dom, {}, props);
    if (props.children) {
      // 如果是独生子的话，把独生子的虚拟DOM转换真实DOM插入到DOM节点上
      if (typeof props.children === "object" && props.children.type) {
        mount(props.children, dom);
      } else if (Array.isArray(props.children)) {
        reconcileChildren(props.children, dom);
      }
    }
  }
  return dom;
}

// 创建函数组件
function mountFunctionComponent(vdom) {
  const { type, props } = vdom;
  // 执行函数，创建函数组件的虚拟dom
  const renderVdom = type(props);
  // 执行创建真实dom的方法，将虚拟dom转换为真实dom
  return createDOM(renderVdom);
}
```

## 类组件

### src/index.js

使用类创建一个组件

```js{6-16}
import React from "./react";
import ReactDOM from "./react-dom/client";

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

### src/Component.js

定义类组件的基座

```js{1-7}
export class Component {
  // 给类 Component 添加一个静态属性，用于区分是函数组件还是类组件
  static isReactComponent = true;
  constructor(props) {
    this.props = props;
  }
}
```

### src/react.js

将定义的基座导出

```js{1,5}
import { Component } from "./Component";

const React = {
  createElement,
  Component,
};

export default React;
```

### src/react-dom/client.js

虚拟 dom 的 `type` 为 `function`是，通过定义的 `isReactComponent` 判断是函数组件还是类组件

```js{9-14,33-42}
//把虚拟DOM变成真实的DOM
function createDOM(vdom) {
  const { type, props } = vdom;
  let dom;
  // 如果此虚拟DOM类型是一个文本节点 string number
  if (type === REACT_TEXT) {
    dom = document.createTextNode(props);
  } else if (typeof type === "function") {
    // 判断是函数组件还是类组件
    if (type.isReactComponent) {
      return mountClassComponent(vdom);
    } else {
      return mountFunctionComponent(vdom);
    }
  } else {
    dom = document.createElement(type); //原生组件
  }
  // 判断属性的类型，因为对于元素的话，props是对象，对于文本节点而言，它的props就是文本本身
  if (typeof props === "object") {
    updateProps(dom, {}, props);
    if (props.children) {
      // 如果是独生子的话，把独生子的虚拟DOM转换真实DOM插入到DOM节点上
      if (typeof props.children === "object" && props.children.type) {
        mount(props.children, dom);
      } else if (Array.isArray(props.children)) {
        reconcileChildren(props.children, dom);
      }
    }
  }
  return dom;
}

// 创建类组件
function mountClassComponent(vdom) {
  const { type, props } = vdom;
  // 创建类的实体
  const classInstance = new type(props);
  // 通过 render 创建虚拟dom
  const renderVdom = classInstance.render();
  // 执行创建真实dom的方法，将虚拟dom转换为真实dom
  return createDOM(renderVdom);
}
```

## 组件的更新

### src/index.js

点击按钮设置 number +1

```js
import React from "./react";
import ReactDOM from "./react-dom/client";

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

### src/Component.js

在组件基座中封装更新方法

```js{1-72,79-102}
import { compareTwoVdom, findDOM } from "./react-dom/client";

class Updater {
  // 每个更新器会保存一个组件类的实例
  constructor(classInstance) {
    this.classInstance = classInstance;
    // 用来存放更新状态
    this.pendingState = [];
    // 用来存放回调函数
    this.callbacks = [];
  }

  // 执行回调函数
  flushCallbacks() {
    if (this.callbacks.length > 0) {
      this.callbacks.forEach((callback) => callback());
      this.callbacks.length = 0;
    }
  }

  // 添加状态更新
  addState(partialState, callback) {
    // 添加新的状态到更新队列
    this.pendingState.push(partialState);
    if (typeof callback === "function") {
      this.callbacks.push(callback);
    }
    // 准备更新
    this.emitUpdate();
  }

  // 状态更新发射器
  emitUpdate() {
    this.updateComponent();
  }

  // 更新组件
  updateComponent() {
    // 获取更新队列和类的实例
    const { pendingState, classInstance } = this;
    // 如果有正在等待生效的状态
    if (pendingState.length > 0) {
      shouldUpdate(classInstance, this.getState());
    }
  }

  // 根据等待生效的状态数组计数新的状态
  getState() {
    const { pendingState, classInstance } = this;
    // 先拿到实例上的老状态
    let { state } = classInstance;
    // 遍历待生效的状态数组
    pendingState.forEach((partialState) => {
      if (typeof partialState === "function") {
        partialState = partialState(state);
      }
      // 用新的状态覆盖老的状态
      state = { ...state, ...partialState };
    });
    // 清空更新队列
    pendingState.length = 0;
    // 返回新的状态
    return state;
  }
}

function shouldUpdate(classInstance, nextState) {
  // 新把计算得到的新状态赋给类的实例
  classInstance.state = nextState;
  // 让组件强制更新
  classInstance.forceUpdate();
}

export class Component {
  // 给类Component添加一个静态属性
  static isReactComponent = true;
  constructor(props) {
    this.props = props;
    this.state = {};
    // 每个类会有一个更新器的实例
    this.update = new Updater(this);
  }

  // 设置新的state时，调用更新器，将新的状态添加到更新队列
  setState(partialState, callback) {
    this.update.addState(partialState, callback);
  }

  forceUpdate() {
    // 先获取老的虚拟 dom，然后计算新的虚拟 dom，对比新老差异，然后把这些差异更新到真实 dom 上
    // 获取老的 vdom
    const oldRenderVdom = this.oldRenderVdom;
    // 根据新状态计算新的 vdom
    const newRenderVdom = this.render();
    // 获取此组件对应的老的真实dom
    const oldDOM = findDOM(oldRenderVdom);
    // 比较新旧虚拟 dom 差异，把更新后的结果放在真实 dom 上
    compareTwoVdom(oldDOM.parentNode, oldRenderVdom, newRenderVdom);
    // 更新后需要把旧的虚拟dom更新为新的vdom
    this.oldRenderVdom = newRenderVdom;
    // 执行回调函数
    this.update.flushCallbacks();
  }
}
```

### src/react-dom/client.js

处理事件，并记录虚拟 dom 和真实 dom

```js{42,43,51,52,59,84-86,99-109}
import { REACT_TEXT } from "../constants";
/**
 * 把虚拟DOM变成真实的DOM并且插入到container容器里
 * @param {*} vdom
 * @param {*} container
 */
function mount(vdom, container) {
  // 传进去虚拟DOM，返回真实DOM
  const newDOM = createDOM(vdom);
  // 将真实DOM渲染到父级节点中;
  container.appendChild(newDOM);
}

//把虚拟DOM变成真实的DOM
function createDOM(vdom) {
  const { type, props } = vdom;
  let dom;
  // 如果此虚拟DOM类型是一个文本节点 string number
  if (type === REACT_TEXT) {
    dom = document.createTextNode(props);
  } else if (typeof type === "function") {
    if (type.isReactComponent) {
      return mountClassComponent(vdom);
    } else {
      return mountFunctionComponent(vdom);
    }
  } else {
    dom = document.createElement(type); //原生组件
  }
  // 判断属性的类型，因为对于元素的话，props是对象，对于文本节点而言，它的props就是文本本身
  if (typeof props === "object") {
    updateProps(dom, {}, props);
    if (props.children) {
      // 如果是独生子的话，把独生子的虚拟DOM转换真实DOM插入到DOM节点上
      if (typeof props.children === "object" && props.children.type) {
        mount(props.children, dom);
      } else if (Array.isArray(props.children)) {
        reconcileChildren(props.children, dom);
      }
    }
  }
  // 将真实 dom 关联到虚拟 dom
  vdom.trueDOM = dom;
  return dom;
}

function mountClassComponent(vdom) {
  const { type, props } = vdom;
  const classInstance = new type(props);
  const renderVdom = classInstance.render();
  // 在获取 render 的渲染结果后，将此结果放到 classInstance 上进行暂存
  classInstance.oldRenderVdom = renderVdom;
  return createDOM(renderVdom);
}

function mountFunctionComponent(vdom) {
  const { type, props } = vdom;
  const renderVdom = type(props);
  vdom.oldRenderVdom = renderVdom;
  return createDOM(renderVdom);
}

function reconcileChildren(childrenVdom, parentDOM) {
  for (let i = 0; i < childrenVdom.length; i++) {
    mount(childrenVdom[i], parentDOM);
  }
}
/**
 * 更新DOM元素的属性
 * 1.把新的属性全部赋上去
 * 2.把老的属性在新的属性对象没有删除掉
 */
function updateProps(dom, oldProps = {}, newProps = {}) {
  for (let key in newProps) {
    // children属性会在后面单独处理
    if (key === "children") {
      continue;
    } else if (key === "style") {
      // 把样式对象上的所有属性都赋给真实DOM
      let styleObject = newProps[key];
      for (const attr in styleObject) {
        dom.style[attr] = styleObject[attr];
      }
    } else if (/^on[A-Z].*/.test(key)) {
      // 处理事件，以 on 开头的为事件
      dom[key.toLowerCase()] = newProps[key];
    } else {
      //如果是其它属性，则直接赋值
      dom[key] = newProps[key];
    }
  }
  for (let key in oldProps) {
    if (!newProps.hasOwnProperty(key)) {
      dom[key] = null;
    }
  }
}

// 根据虚拟 dom 寻找真实 dom
export function findDOM(vdom) {
  if (!vdom) return null;
  return vdom.trueDOM;
}

export function compareTwoVdom(parentDOM, oldVdom, newVdom) {
  const oldDOM = findDOM(oldVdom);
  const newDOM = createDOM(newVdom);
  parentDOM.replaceChild(newDOM, oldDOM);
}

class DOMRoot {
  // container 根节点
  constructor(container) {
    this.container = container;
  }
  // 将虚拟dom渲染到根节点
  render(vdom) {
    mount(vdom, this.container);
  }
}

function createRoot(container) {
  return new DOMRoot(container);
}

const ReactDOM = {
  createRoot,
};

export default ReactDOM;
```

## 合成事件和批量更新


