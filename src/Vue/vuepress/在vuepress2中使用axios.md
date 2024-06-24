---
title: 在vuepress2中使用axios
date: 2024-06-24 09:13:33
order: 4
category:
  - 前端
tag:
  - Vue
  - VuePress
  - VuePress2
  - axios
---

# 在 vuepress2 中使用 axios

## 安装 axios

使用命令行工具安装 axios

```sh
pnpm install axios
```

## 封装 http 模块

在 `.vuepress` 目录下创建 http 模块，模块详见

## 全局使用 http 模块

在 `client.ts` 中将封装好的 http 模块引入

```ts
import http from './http';

export default defineClientConfig({
  enhance({ app }) {
    app.config.globalProperties.http = http;
  },

  setup() {},

  rootComponents: [],
});
```

## 使用 http

在组件中使用 http

```vue
<template></template>
<script lang="ts" setup>
import { getCurrentInstance, ref } from 'vue';
const cns = getCurrentInstance();

const getApi = async () => {
  try {
    const res = await $get('/api', config);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
</script>
<style lang="scss"></style>
```
