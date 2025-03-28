import { sidebar } from 'vuepress-theme-hope';

export default sidebar({
  '/基础/': [
    {
      text: '语法',
      collapsible: true,
      prefix: '语法/',
      children: 'structure',
    },
    {
      text: '打包工具',
      collapsible: true,
      prefix: '打包工具/',
      children: 'structure',
    },
  ],
  '/Vue/': [
    {
      text: '工具库',
      collapsible: true,
      prefix: '工具库/',
      children: 'structure',
    },
    {
      text: 'vuepress',
      collapsible: true,
      prefix: 'vuepress/',
      children: 'structure',
    },
    {
      text: 'Vue3',
      collapsible: true,
      prefix: 'Vue3/',
      children: 'structure',
    },
    {
      text: '项目搭建',
      collapsible: true,
      prefix: '项目搭建/',
      children: 'structure',
    },
  ],
  '/React/': [
    { text: 'React路由使用', link: 'React路由使用' },
    { text: 'Antd中文设置', link: 'Antd中文设置' },
  ],
  '/H5/': [
    {
      text: '工具库',
      collapsible: true,
      prefix: '工具库/',
      children: 'structure',
    },
  ],
  '/微前端/': [
    { text: '微前端', link: '微前端' },
    { text: '路由分发式微前端', link: '路由分发式微前端' },
    { text: 'iframe', link: 'iframe' },
    {
      text: 'single-spa',
      collapsible: true,
      prefix: 'single-spa/',
      children: 'structure',
    },
    {
      text: 'qiankun',
      collapsible: true,
      prefix: 'qiankun/',
      children: 'structure',
    },
  ],
  '/nodejs/': [
    {
      text: 'node',
      collapsible: true,
      prefix: 'node/',
      children: 'structure',
    },
    {
      text: 'nestjs',
      collapsible: true,
      prefix: 'nestjs/',
      children: 'structure',
    },
  ],
  '/工具库/': [
    {
      text: 'tinymce',
      collapsible: true,
      prefix: 'tinymce/',
      children: 'structure',
    },
    {
      text: '百度地图',
      collapsible: true,
      prefix: '百度地图/',
      children: 'structure',
    },
    {
      text: 'axios',
      collapsible: true,
      prefix: 'axios/',
      children: 'structure',
    },
    {
      text: '常用工具',
      collapsible: true,
      prefix: '常用工具/',
      children: 'structure',
    },
  ],
  '/css/': [
    { text: '常用css片段', link: '常用css片段' },
    { text: 'css文本换行', link: 'css文本换行' },
  ],
  '/破产平台/': [{ text: '组件预览', link: 'overview' }],
  '/牛咔平台/': [
    { text: '指南', collapsible: true, prefix: '指南/', children: 'structure' },
    { text: '组件预览', link: 'overview' },
    {
      text: 'Form 表单组件',
      collapsible: true,
      prefix: 'Form 表单组件/',
      children: 'structure',
    },
    {
      text: 'Navigation 导航',
      collapsible: true,
      prefix: 'Navigation 导航/',
      children: 'structure',
    },
  ],
  '/wiki/': [
    {
      text: '破产平台',
      collapsible: true,
      prefix: '破产平台/',
      children: 'structure',
    },
  ],
  '/踩坑记录/': [
    {
      text: 'TypeScript',
      collapsible: true,
      prefix: 'TypeScript/',
      children: 'structure',
    },
    {
      text: '微前端',
      collapsible: true,
      prefix: '微前端/',
      children: 'structure',
    },
    {
      text: 'VuePress',
      collapsible: true,
      prefix: 'VuePress/',
      children: 'structure',
    },
  ],
  '/其他/': [
    {
      text: 'Windows批量修改文件名',
      link: 'Windows批量修改文件名',
    },
  ],
});
