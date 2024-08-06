---
title: 轻量级翻页插件swiper
date: 2024-08-05 10:18:01
order: 1
category:
  - 前端
  - 学习笔记
tag:
  - H5
  - swiper
---

# 轻量级翻页插件 swiper

这里的 `swiper` 是由 `fex-team` 团队开源的轻量级翻页插件

[项目地址](https://github.com/fex-team/swiper)

## 下载插件

拉取[项目](https://github.com/fex-team/swiper)到本地进行打包，或者直接<download-swiper></download-swiper>打包好的文件

## 使用

### 引入插件

```html{7,11}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>document</title>
    <link rel="stylesheet" href="./swiper/swiper.css" />
  </head>

  <body>
    <script src="./swiper/swiper.js"></script>
  </body>
</html>
```

## 定义容器

创建一个有宽高的容器

```html
<div id="outer-container"></div>
```

```css
#outer-container {
  height: 100%;
  width: 100%;
}
```

## 创建 swiper

```js
const list = [
  {
    content: '<h1>第 1 页</h1>',
  },
  {
    content: '<h1>第 2 页</h1>',
  },
  // ...
];
const swiper = new Swiper({
  container: document.querySelector('#outer-container'),
  data: list,
});
```

html 写在 js 中不方便编写，这里通过 script 模板编写页面

```html
<script type="text/html" id="first-page">
  <div class="page-wrap">这里是页面一的内容</div>
</script>
```

```js
const list = [
  {
    content: document.getElementById('first-page').innerHTML,
  },
  // ...
];
```

## 配置项

| 配置项             | 类型                      | 默认值                           | 说明                         |
| ------------------ | ------------------------- | -------------------------------- | ---------------------------- |
| container          | DOM or string             | document.body                    | swiper 的外层容器            |
| data               | [Page](#page)[]           | []                               | 所有页面的数据               |
| debug              | boolean                   | false                            | 是否开启调试模式             |
| isVertical         | boolean                   | true                             | 是否是垂直方向滑动           |
| isLoop             | boolean                   | false                            | 是否开启循环翻页             |
| keepDefaultClasses | string[]                  | []                               | 保持默认行为的 class 名      |
| transition         | [Transition](#transition) | `{name: 'slide', duration: 800}` | 翻页过渡动画，按照优先级取值 |

::: warning 关于 keepDefaultClasses
为防止滑动事件中断，Swiper 默认阻止所有除了 `a`, `input`, `textarea`, `select` 以外的所有元素的滑动事件；
如果需要实现在微信内置浏览器长按图片识别二维码的功能，需要将图片的 class 添加到`keepDefaultClasses`
加入到 `keepDefaultClasses` 的元素及其 **后代元素** 均会被排除在外。因此 `keepDefaultClasses` 就是一个 **要保持默认响应的元素 class 的白名单**。
:::

### Page

```js
{
  // 本页面内容，可以是 DOM 或者 string
  content: DOM or string,
  // 本页面翻页过渡动画
  transition: Transition
}
```

### Transition

```js
{
  // 过渡动画名称，目前提供了 5 种过渡动画
  name: 'slide' | 'rotate' | 'flip' | 'card' | 'fade';
  // 过渡动画时长，单位为 ms
  duration: Number;
  // 只允许滑动方向 1: 后向，-1: 前向，0:双向禁止滑动，默认为 undefined，即不限制任何方向的滑动
  direction: 1 | -1 | 0;
}
```

## 事件

Swiper 提供了 7 个事件

| 事件名            | 触发时机             |
| ----------------- | -------------------- |
| swipeStart        | 在页面开始滑动时触发 |
| swipeMoving       | 在页面滑动时触发     |
| swipeChanged      | 在翻页完成时触发     |
| swipeRestore      | 在回弹开始时触发     |
| swipeRestored     | 在回弹完成时触发     |
| activePageChanged | 下一页有变动时触发   |
| destroy           | 销毁实例时触发       |

### on

on 函数用于监听事件

```js
swiper.on(eventName, listener);
```

- eventName: string, swiper [事件](#事件)
- listener: Function, 当所监听事件触发时，就会接收到通知并执行该函数，拥有 1 个参数 event
  - event: Object, 默认包含 name 属性，表示当前的事件名

### off

off 函数用于取消监听事件，与 on 函数相反。取消监听后，不会接收到事件响应。

```js
swiper.off(eventName, listener);
```

- eventName: string, swiper [事件](#事件)
- listener: Function, 在 on 函数中传入的监听函数。

## API

| 函数名      | 作用         |
| ----------- | ------------ |
| swipeTo     | 翻到指定页面 |
| swipePrev   | 翻到上一页   |
| swipeNext   | 翻到下一页   |
| [on](#on)   | 监听事件     |
| [off](#off) | 取消监听事件 |

### swipeTo

用于将页面翻到指定页码（从 0 开始计），可以指定翻页过渡动画。不受页面禁止滑动配置选项的限制。

```js
swiper.swipeTo(toIndex, transition);
```

- toIndex: Number, 翻到的页码，从 0 开始计
- transition: [可选][Transition](#transition), 翻页动画

### swipePrev

用于将页面翻到上一页，可以指定翻页过渡动画。不受页面禁止滑动配置选项的限制。

```js
swiper.swipePrev(transition);
```

- transition: [可选][Transition](#transition), 翻页动画

### swipeNext

用于将页面翻到下一页，可以指定翻页过渡动画。不受页面禁止滑动配置选项的限制。

```js
swiper.swipeNext(transition);
```

- transition: [可选][Transition](#transition), 翻页动画
