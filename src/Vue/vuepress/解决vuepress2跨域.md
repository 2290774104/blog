---
title: 解决vuepress2跨域
date: 2024-06-24 11:01:12
order: 5
category:
  - 前端
tag:
  - Vue
  - VuePress
  - VuePress2
  - axios
---

# 解决 vuepress2 跨域

通过代理服务器解决跨域，详见

## 安装 vite 打包工具

这里使用 vite 作为打包工具进行代理

```sh
npm i -D @vuepress/bundler-vite@next
```

## 配置代理

这里以百度地图 api 为例，通过将 `/map` 转发到其他服务上

```ts
import { defineUserConfig, viteBundler } from 'vuepress';

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {
      server: {
        proxy: {
          '/map': {
            target: 'http://api.map.baidu.com',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/map/, ''),
          },
        },
      },
    },
    vuePluginOptions: {},
  }),
});
```

发起请求时通过添加 `/map` 前缀匹配代理服务

```ts
const getBMap = async () => {
  try {
    const res = await $get('/map/api', config);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
```
