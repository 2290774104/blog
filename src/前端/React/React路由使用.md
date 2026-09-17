---
title: React路由使用
date: 2024-06-18 11:09:33
order: 2
category:
  - 前端
  - 学习笔记
tag:
  - React
  - react-router
---

# React 路由使用

## 安装 react-router-dom

```sh
pnpm install react-router-dom
```

## 封装 router 入口文件

创建文件

```sh
mkdir src/router/index.tsx
```

router/index.tsx

```tsx
import { createBrowserRouter } from 'react-router-dom';
import Root from '../views/root';
import PageA from '../views/pageA';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/pageA',
    element: <PageA />,
  },
]);

export default router;
```

## 使用 router

将封装好的 router 引入 main.tsx 中注册

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';

import router from './router';
import { RouterProvider } from 'react-router-dom';

const rootComponent = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(rootComponent());
```

## 页面跳转

### 声明式跳转

声明式跳转，也叫标签跳转，通过 a 获取 Link 标签进行跳转

```tsx
import { Button } from 'antd';
import { Link } from 'react-router-dom';

function Root() {
  return (
    <>
      <Button>
        <Link to="/pageA">前往下一个页面</Link>
      </Button>
    </>
  );
}

export default Root;
```

### 编程式跳转

使用 useNavigate（路由框架自定义 hook，非 React 官方提供）

```tsx
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function Root() {
  const navigate = useNavigate();

  const toNextPage = () => {
    navigate('/pageA');
  };

  return (
    <>
      <Button onClick={toNextPage}>前往下一个页面</Button>
    </>
  );
}

export default Root;
```
