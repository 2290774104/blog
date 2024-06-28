---
title: searchPro中文检索报错
date: 2024-06-27 16:44:00
order: 3
category:
  - 前端
  - 踩坑记录
tag:
  - Vue
  - VuePress
  - VuePress2
  - vuepress-theme-hope
---

# searchPro 中文检索报错

使用 `vuepress-theme-hope` 主题开发时，使用 `vuepress-plugin-search-pro` 作为搜索插件。

## 问题描述

问题已提交到[GitHub](https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/4237)

### Checklist

- [x] I am using **LTS** version of Node.js.
- [x] I am using the **latest v2 version** of VuePress and VuePress official plugins.
- [x] I am using the **latest v2 version** of vuepress-theme-hope and all plugins in this repo.
- [x] I followed the docs and I double checked my configuration.
- [x] I have searched [FAQ](https://theme-hope.vuejs.press/faq/) and I did not find the answer.

### Package name

vuepress-theme-hope

### Which operating system are you using?

- [ ] macOS
- [x] Windows
- [ ] Linux

### Describe the bug

使用文档提供的命令创建项目后，在 `theme.ts` 中的 searchPro 配置 `indexContent: true` 时，搜索中文会导致页面报错，但 `config.ts` 中配置则可以正常搜索

```sh
pnpm create vuepress-theme-hope my-docs
pnpm add -D vuepress-plugin-search-pro
```

```ts
// theme.ts
export default hopeTheme({
  plugins: {
    searchPro: {
      indexContent: true;
    }
  }
})
```

这是在 `theme.ts` 中配置后搜索出现的错误
![theme.ts配置报错](https://github.com/vuepress-theme-hope/vuepress-theme-hope/assets/72640061/1bbd8d2b-f0d0-46ba-acaa-bfd0c87d624c)

```ts
// config.ts
import { searchProPlugin } from 'vuepress-plugin-search-pro';

export default defineUserConfig({
  plugins: [
    searchProPlugin({
      indexContent: true,
    }),
  ],
});
```

这是在 `config.ts` 中配置的搜索成功
![config.ts配置后成功](https://github.com/vuepress-theme-hope/vuepress-theme-hope/assets/72640061/742c19a0-cfef-44c7-8c90-8aa75f2fc9a5)

### Additional context

开发环境：

- node v18.20.3
- npm 10.7.0
- pnpm 9.4.0

项目依赖版本

- "@vuepress/bundler-vite": "2.0.0-rc.14",
- "vue": "^3.4.27",
- "vuepress": "2.0.0-rc.14",
- "vuepress-plugin-search-pro": "2.0.0-rc.50",
- "vuepress-theme-hope": "2.0.0-rc.50"
