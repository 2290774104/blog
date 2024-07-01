---
title: Vue3定义全局变量
date: 2024-07-01 09:23:58
order: 2
category:
  - 前端
  - 学习笔记
tag:
  - vue
  - vue3
---

# Vue3 定义全局变量

在 Vue3 中，定义一个全局变量，便于在各个文件中直接使用，而无需每次都引入

## 设置全局变量

通过在 main.ts 入口文件中注册 Vue 的时候绑定全局变量，这里以 http 模块为例

```ts
import { createApp } from 'vue';
import App from './App.vue';
import http from './http';

const app = createApp(App);
app.config.globalProperties.$http = http;

app.mount('#app');
```

## 使用

### 组件实例中使用

在正常组件中直接通过 `this` 访问

```vue
<script lang="ts">
export default {
  mounted() {
    console.log(this.$http);
  },
};
</script>
```

### setup 语法糖中使用

在 setup 语法糖中通过 `getCurrentInstance` 访问

```vue
<script setup lang="ts">
import { getCurrentInstance } from 'vue';

const app = getCurrentInstance();
const $http = app?.appContext.config.globalProperties.$http;
console.log($http);
</script>
```
