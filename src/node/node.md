---
title: node
date: 2023-07-02 10:44:22
order: 1
category:
  - 前端
  - 学习笔记
  - node
tag:
  - node
  - JavaScript
---

# node

## node 的概念

node 并不是一门语言，运行时可以让 js 运行到服务端（底层用的是 v8 引擎构建的）

## node 的特点

1. 非阻塞 i/o（异步的非阻塞）
2. 事件驱动（支持 js 语法，但不支持 bom 和 dom）
3. 具有内置模块（fs、path 等）

node 中实现的 api 都是支持异步的，底层采用的是多线程模型

### 线程池

默认创建 10 个线程

1. 多线程：可以同时执行多个任务，给每个请求分配一个线程，优点是可以并行，缺点是浪费资源。适合 cpu 密集型（压缩、加密）
2. 单线程：只有一个，节约内存。不适合 cpu 密集型，适合 i/o 密集型。缺点是容易阻塞
3. 事件驱动：按照事件的顺序来触发处理逻辑（事件环），读写操作完成后会放到对应的队列中，等待事件环来触发对应的事件

### node 用处

1. 编写前端工具、工具链（vite、rollup、webpack、gulp、脚手架等）
2. 为前端服务后端，中间层（client、bff、格式化、云服务、跨域、代理）
3. 聊天、socket、即时通讯、爬虫、ssr

### 模块化

前端最早是没有模块化的概念，node 中自己实现了一套模块化的规范。

commonjs 规范，定义如何导出一个模块

1. 每个 js 都是一个模块
2. 模块使用 module.exports 导出
3. 使用 require 导入使用模块

模块有自己的加载方式

1. 如果引入的模块是一个内置模块，直接返回即可，从当前目录递归向上查找是否存在模块
2. 找到 node_module 则会找到文件夹下同名的文件夹，看这个文件夹里的 package.json，main.js
3. 文件模块，通过相对路径或决定路径引入的资源，文件不存在则会尝试添加.js .json .node 尾缀
4. 如果仍未找到就会报错

尽量避免模块的文件名和文件夹重名

## 包管理工具

笔记常用的有 npm、cnpm、yarn 等，包管理工具不能混用

### 初始化

npm init 可以帮助我们自动初始化一个 package.json 记录安装的依赖和我们当前包的信息（包：多个模块组成的叫做包）

```sh
npm init
```

根据步骤填写信息，初始化 package.json 后就可以安装自己所需的模块

### 依赖类型

- 项目依赖 dependencies
- 开发依赖 devDependencies
- 同等依赖 peearDependencies 要求你安装但是不安装也不报错
- 爱装不装 optionDepencies
- 打包依赖 捆绑打包

也可以不区分依赖 全部安装成项目依赖

### 版本管理

版本格式为 major.minor.patch 主版本.小版本.补丁版本 semver 一个版本规范，用来描述版本的

- 内部测试 1.0.0-alpha.4
- 公开测试 1.0.0-beta.1
- 马上发布 1.0.0-rc.2

版本号标识符

- ~ 会匹配最近的小版本依赖包，比如~1.2.3 会匹配所有 1.2.x 版本，但是不包括 1.3.0
- ^ 会匹配最新的大版本依赖包，比如^1.2.3 会匹配所有 1.x.x 的包，包括 1.3.0，但是不包括 2.0.0
- \* 这意味着安装最新版本的依赖包

## node 事件环

我们调用的 nodeapi 都是交给我们 libuv 库来去实现的， 通过阻塞 i/o 来实现 异步通知完成的方式就是事件驱动

   ┌───────────────────────────┐
┌─>│           timers          │ 放定时器
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │ 上一轮没执行完的在这来执行
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │ 内部使用
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │  文件读写回调再这里来执行
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │ 执行setImmiedate
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │ socket.close()
   └───────────────────────────┘

## node 和浏览器的差异

1. node 中的全局对象 global，global 中属性可以直接在任意模块下访问，有一些属性也可以直接访问（exports、require、**dirname、**filename 等）
2. 在 node 中没有浏览器提供的 document、window 和其他的对象。
3. node 中不需要考虑浏览器的版本，可以支持所有现代的 ES6-7-8-9-10，ES-Next 的 JavaScript。

## node 基础使用

### 读取文件

```js
const path = require("path");

console.log(path.join(__dirname, "a", "b", "/"));
// e:\project\node\a\b\
// join 为拼接路径

console.log(path.resolve("a", "b", "/a"));
// e:\a
// resolve 会解析出一个相对路径

console.log(path.extname("a.main.js"));
// .js
// extname 会后去文件的扩展名
```