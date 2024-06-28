import { navbar } from 'vuepress-theme-hope';

export default navbar([
  '/',
  {
    text: '基础',
    prefix: '/基础/',
    children: [
      {
        text: '语法',
        prefix: '语法/',
        children: [
          { text: 'JavaScript异步编程', link: 'JavaScript异步编程' },
          { text: 'TypeScript', link: 'TypeScript' },
          { text: 'Promise', link: 'Promise' },
        ],
      },
      {
        text: '打包工具',
        prefix: '打包工具/',
        children: [
          { text: 'webpack', link: 'webpack' },
          {
            text: 'Vite对TypeScript的支持及其原理',
            link: 'Vite对TypeScript的支持及其原理',
          },
        ],
      },
    ],
  },
  {
    text: 'Vue',
    prefix: '/Vue/',
    children: [
      {
        text: 'vuepress',
        prefix: 'vuepress/',
        children: [
          { text: 'vuepress-v1', link: 'vuepress-v1' },
          { text: '在vuepress2中使用axios', link: '在vuepress2中使用axios' },
          { text: '解决vuepress2跨域', link: '解决vuepress2跨域' },
          { text: 'vuepress2本地插件编写', link: 'vuepress2本地插件编写' },
          { text: '仿element风格Demo展示', link: '仿element风格Demo展示' },
        ],
      },
      { text: 'Vue3', link: 'Vue3' },
    ],
  },
  {
    text: 'React',
    prefix: '/React/',
    children: [
      { text: 'React路由使用', link: 'React路由使用' },
      { text: 'Antd中文设置', link: 'Antd中文设置' },
    ],
  },
  {
    text: '微前端',
    prefix: '/微前端/',
    children: [
      { text: '微前端', link: '微前端' },
      { text: '路由分发式微前端', link: '路由分发式微前端' },
      { text: 'iframe', link: 'iframe' },
      {
        text: 'single-spa',
        prefix: 'single-spa/',
        children: [
          { text: 'single-spa基础', link: 'single-spa基础' },
          { text: 'single-spa示例', link: 'single-spa示例' },
        ],
      },
    ],
  },
  {
    text: 'nodejs',
    prefix: '/nodejs/',
    children: [
      {
        text: 'node',
        prefix: 'node/',
        children: [
          { text: '高阶函数', link: '高阶函数' },
          { text: 'node', link: 'node' },
        ],
      },
      {
        text: 'nestjs',
        prefix: 'nestjs/',
        children: [
          { text: 'nestjs安装', link: 'nestjs安装' },
          { text: 'nestjs基础', link: 'nestjs基础' },
          { text: 'DTO验证入参', link: 'DTO验证入参' },
        ],
      },
    ],
  },
  {
    text: '工具库',
    prefix: '/工具库/',
    children: [
      { text: 'Vue优雅的引入第三方库', link: 'Vue优雅的引入第三方库' },
      {
        text: 'tinymce',
        prefix: 'tinymce/',
        children: [
          { text: '在Vue中使用tinymce', link: '在Vue中使用tinymce' },
          { text: 'tinymce图片上传插件', link: 'tinymce图片上传插件' },
        ],
      },
      {
        text: '百度地图',
        prefix: '百度地图/',
        children: [
          { text: '申请开发者', link: '申请开发者' },
          { text: '在Vue3中使用', link: '在Vue3中使用' },
        ],
      },
      {
        text: 'axios',
        prefix: 'axios/',
        children: [
          { text: 'axios二次封装', link: 'axios二次封装' }
        ]
      },
      {
        text: '常用工具',
        prefix: '常用工具/',
        children: [
          { text: 'Base64图片处理', link: 'Base64图片处理' },
          { text: 'UUID生成器', link: 'UUID生成器' },
          { text: '字母大小写转换', link: '字母大小写转换' },
          { text: '时间转换', link: '时间转换' },
        ],
      },
    ],
  },
  {
    text: '项目搭建',
    prefix: '/项目搭建/',
    children: [{ text: 'vue2-template', link: 'vue2-template' }],
  },
  {
    text: 'css',
    prefix: '/css/',
    children: [{ text: '常用css片段', link: '常用css片段' }],
  },
  {
    text: '组件文档',
    prefix: '/组件文档/',
    children: [
      {
        text: '破产平台',
        prefix: '破产平台/',
        children: [
          { text: 'p-tabs', link: 'p-tabs' },
          { text: 'p-el-select', link: 'p-el-select' },
          { text: 'p-file-module', link: 'p-file-module' },
        ],
      },
    ],
  },
  {
    text: 'wiki',
    prefix: '/wiki/',
    children: [
      {
        text: '破产平台',
        prefix: '破产平台/',
        children: [
          { text: '破产小程序发布流程', link: '破产小程序发布流程' },
          { text: '人脸识别流程', link: '人脸识别流程' },
        ],
      },
    ],
  },
  {
    text: '踩坑记录',
    prefix: '/踩坑记录/',
    children: [
      {
        text: 'TypeScript',
        link: 'TypeScript/目录',
      },
      {
        text: '微前端',
        link: '微前端/目录',
      },
      {
        text: 'VuePress',
        link: 'VuePress/目录'
      }
    ],
  },
]);
