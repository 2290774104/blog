---
title: qiankun基础
date: 2024-07-01 10:13:35
order: 1
category:
  - 前端
  - 学习笔记
  - 微前端
tag:
  - 微前端
  - qiankun
---

# qiankun 基础

qiankun 是一个基于 `single-spa` 的微前端实现库

## qiankun 集成子项目示例

详见[qiankun 示例](./qiankun示例.md)

## props

### 主应用中定义 props

在主应用中，注册子应用的基础配置信息时，定义 props ，编写需要传递给子应用的信息

```ts{8-10}
const apps: RegistrableApp<any>[] = [
  // ...
  {
    name: 'app2',
    entry: 'http://localhost:8082/app2',
    container: '#microApp',
    activeRule: '/app2',
    props: {
      title: 'props 传递的参数'
    }
  },
]

```

### 在子应用中接收 props

在子应用生命周期 mount 中获取

```ts{3}
renderWithQiankun({
  mount(props: QiankunProps) {
    console.log(props.title);
    render(props);
  },
});
```

## initGlobalState
