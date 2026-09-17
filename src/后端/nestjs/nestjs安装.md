---
title: nestjs安装
date: 2024-06-04 14:16:24
order: 1
category:
  - 后端
  - 框架
tag:
  - nodejs
  - nestjs
  - TypeScript
---

# nestjs 安装

## 介绍

Nest 是一个用于构建高效，可扩展的 Node.js 服务器端应用程序的框架。它使用渐进式 JavaScript，内置并完全支持 TypeScript

## 安装脚手架

通过 npm 指令全局安装脚手架工具`@nestjs/cli`

```sh
npm i -g @nestjs/cli
```

## 创建项目

`project-name` 为创建项目的名称

```sh
nest new project-name
```

## nestjs 项目结构

```text
.
├── src
│   ├── app.controller.spec.ts 基本控制器的单元测试
│   ├── app.controller.ts 基本控制器
│   ├── app.module.ts 应用程序的根模块
│   ├── app.service.ts 基本服务
│   └── main.ts 应用程序入口文件
│
├── test 存放测试文件
├── .eslintrc.js ESLint配置文件
├── .gitignore git追踪忽略文件
├── .prettierrc prettier配置文件
├── nest-cli.json nest项目配置文件
├── package.json 记录项目信息安装依赖版本信息
├── pnpm-lock.yaml 记录锁定安装依赖版本信息
├── README.md 项目说明文件
├── tsconfig.build.json ts语法构建时配置文件
└── tsconfig.json ts语法编译器配置文件
```

## 运行应用程序

安装过程完成后，可以在命令行工具中运行以下命令，以启动应用程序：

```sh
pnpm run start
```

要监听文件中的更改，可以运行以下命令来启动应用程序：

```sh
pnpm run start:dev
```
