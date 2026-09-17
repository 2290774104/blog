---
title: Antd中文设置
date: 2024-06-18 11:19:33
order: 3
category:
  - 前端
  - 学习笔记
tag:
  - React
  - Antd
---

# Antd 中文设置

Antd 组件引用默认为英文，中文需要手动配置

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';

import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

import router from './router';
import { RouterProvider } from 'react-router-dom';

const rootComponent = () => {
  return (
    <React.StrictMode>
      <ConfigProvider locale={zhCN}>
        <RouterProvider router={router}></RouterProvider>
      </ConfigProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(rootComponent());
```
