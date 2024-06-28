---
title: vuepress2本地插件编写
date: 2024-06-28 09:21:14
order: 6
category:
  - 前端
tag:
  - Vue
  - VuePress
  - VuePress2
---

# vuepress2 本地插件编写

这里参考 vuepress2 的[官方文档](https://v2.vuepress.vuejs.org/zh/advanced/plugin.html)，和 vuepress2 [生态系统](https://github.com/vuepress/ecosystem.git)

## 创建插件

在项目根目录创建 `plugins` 文件夹用于存放本地插件

```ts
// plugin-bar.ts
export const barPlugin = (options) => {
  return (app) => {
    return {
      name: 'vuepress-plugin-bar',
      // ...
    };
  };
};
```

## 使用插件

在 config.ts 中使用插件

```ts
import { defineUserConfig } from 'vuepress';
import { barPlugin } from '../../plugins/plugin-bar.ts';

export default defineUserConfig({
  // ...
  plugins: [barPlugin({})],
});
```
