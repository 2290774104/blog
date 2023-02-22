---
title: 常用css片段
date: 2022-02-08 10:02:15
order: 1
category:
  - 前端
  - css
tags:
  - css
  - scss
---

# 常用css片段

## 1. 样式初始化

目的：
1. 消除不同浏览器对html文本呈现的差异
2. 清除标签默认样式

``` scss
body {
  height: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue,
    Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

html {
  height: 100%;
}

#app {
  height: 100%;
  overflow: auto;
  & > .layout {
    height: 100%;
  }
}

* {
  margin: 0;
  padding: 0;
}

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
       box-sizing: border-box;
}

a,
a:focus,
a:hover {
  color: inherit;
  outline: none;
  text-decoration: none;
  cursor: pointer;
}

div:focus {
  outline: none;
}

label {
  font-weight: 700;
}

ul,
ol,
li {
  list-style-type: none;
}
```

## 2. 通用css片段

1. 浮动

``` scss
.fl {
  float: left;
}

.fr {
  float: right;
}

.clearfix {
  zoom: 1;

  &::before,
  &::after {
    content: "";
    display: table;
  }

  &::after {
    clear: both;
  }
}
```

2. 文字对齐

``` scss
.tal {
  text-align: left;
}

.tac {
  text-align: center;
}

.tar {
  text-align: right;
}
```

3. 元素居中

``` scss
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

4. 文本溢出显示省略号

``` scss
// 省略号
.textEllipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

// 多行文本省略号
.moreText {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```
