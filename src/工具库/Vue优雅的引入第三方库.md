---
title: Vue优雅的引入第三方库
date: 2023-02-23
order: 1
category:
  - 前端
  - 工具库
tags:
  - vue
---

以引入 day.js 为例

``` ts
import day from 'day.js'

Object.defineProperty(Vue.prototype, '$day', { value: day })
```

::: tip 关于$前缀
主要是帮助区分Vuejs 的一些内部属性和方法.
:::

在所有组件/实例中都可以通过 this.$day: 的方式访问 day.js

``` js
export default {
  created() {
    console.log(this.$day().format());
  }
}
```
