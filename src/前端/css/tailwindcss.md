---
title: tailwindcss
date: 2026-09-18 09:10:00
order: 3
category:
  - 前端
  - css
tag:
  - css
  - tailwindcss
---

# tailwindcss

`tailwindcss` 是一个原子化（Utility-First）的 `css` 框架，通过组合大量单一职责的工具类来构建界面，而不是编写自定义样式。

## 1. 核心特点

- 原子化：每个类只负责一个样式属性，如 `p-4`、`text-center`
- 按需生成：构建时只打包用到的类，产物体积小
- 可配置：通过配置文件自定义颜色、间距、断点等设计令牌
- 响应式：内置断点前缀，如 `md:`、`lg:`
- 状态变体：支持 `hover:`、`focus:`、`dark:` 等状态前缀

## 2. 安装与配置

以 `vite` 项目为例：

```bash
pnpm add -D tailwindcss postcss autoprefixer
pnpm exec tailwindcss init -p
```

生成的 `tailwind.config.js`：

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
}
```

在入口 `css` 中引入，如 Vue 项目中的 `App.vue` 中的 `style` 标签中：

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

`Tailwind CSS v4` 之后改为在 `css` 中使用 `@import "tailwindcss";`，并通过 `@theme` 定义设计令牌，不再强制要求 `tailwind.config.js`。

## 3. 常用工具类

### 3.1 布局

```html
<!-- flex 布局：水平、两端对齐、垂直居中、间距 4 -->
<div class="flex items-center justify-between gap-4"></div>

<!-- grid 布局：3 列，间距 6 -->
<div class="grid grid-cols-3 gap-6"></div>
```

| 类名 | 说明 |
| --- | --- |
| `block` / `inline-block` / `hidden` | 显示方式 |
| `flex` / `grid` | 弹性、网格布局 |
| `items-center` | 交叉轴居中 |
| `justify-between` | 主轴两端对齐 |
| `gap-4` | 子项间距 |

### 3.2 间距

`padding` 与 `margin` 使用统一的简写：

```html
<div class="p-4 px-2 py-1 pt-8 m-4 mx-auto -mt-2"></div>
```

- `p` / `m`：`padding` / `margin`
- 方向：`t` `r` `b` `l` `x` `y`
- 数值：`0`、`1`（0.25rem）、`2`、`4`、`8` 等，或 `[12px]` 任意值

### 3.3 尺寸

```html
<div class="w-full h-screen max-w-md min-h-0 size-10"></div>
```

| 类名 | 说明 |
| --- | --- |
| `w-full` / `h-full` | 宽高 100% |
| `w-screen` / `h-screen` | 视口宽高 |
| `max-w-md` | 最大宽度 |
| `size-10` | 同时设置宽高 |

### 3.4 文字

```html
<p class="text-sm font-bold text-gray-700 leading-6 tracking-wide truncate"></p>
```

| 类名 | 说明 |
| --- | --- |
| `text-sm` / `text-lg` | 字号 |
| `font-bold` | 字重 |
| `text-gray-700` | 文字颜色 |
| `text-center` | 对齐方式 |
| `leading-6` | 行高 |
| `truncate` | 单行省略号 |

### 3.5 背景与边框

```html
<div class="bg-white border border-gray-200 rounded-lg shadow-md"></div>
```

| 类名 | 说明 |
| --- | --- |
| `bg-blue-500` | 背景颜色 |
| `bg-gradient-to-r from-blue-500 to-purple-500` | 渐变背景 |
| `border` / `border-2` | 边框宽度 |
| `rounded-md` / `rounded-full` | 圆角 |
| `shadow-lg` | 阴影 |

## 4. 响应式

默认断点：`sm` 640px、`md` 768px、`lg` 1024px、`xl` 1280px、`2xl` 1536px。

```html
<!-- 默认 1 列，md 起 2 列，lg 起 3 列 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></div>
```

移动端优先，未加前缀的样式作用于所有尺寸，带前缀的样式在对应断点及以上生效。

## 5. 状态变体

```html
<button
  class="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 disabled:opacity-50"
>
  按钮
</button>

<div class="bg-white dark:bg-gray-800"></div>
```

## 6. 抽取复用

当同一组类反复出现时，可通过 `@apply` 抽取为组件类：

```css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600;
  }
}
```

`Tailwind CSS v4` 中 `@apply` 仍然可用，但更推荐使用 `@utility` 定义自定义工具类。

## 7. 使用建议

1. 不要在 `html` 中堆砌过多类名，超过一定长度时抽成组件或使用 `@apply`
2. 优先复用设计令牌（颜色、间距），避免随意写任意值 `[18px]`
3. 配合 `prettier-plugin-tailwindcss` 自动排序类名
4. 动态拼接类名时注意构建工具无法扫描，需写完整类名或加入 `safelist`
