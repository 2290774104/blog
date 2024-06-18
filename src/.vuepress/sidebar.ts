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
    { text: 'vuepress-v1', link: 'vuepress-v1' },
    { text: 'Vue3', link: 'Vue3' },
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
    { text: 'Vue优雅的引入第三方库', link: 'Vue优雅的引入第三方库' },
    {
      text: 'tinymce',
      collapsible: true,
      prefix: 'tinymce/',
      children: 'structure',
    },
    {
      text: '常用工具',
      collapsible: true,
      prefix: '常用工具/',
      children: 'structure',
    },
  ],
  '/项目搭建/': [{ text: 'vue2-template', link: 'vue2-template' }],
  '/css/': [{ text: '常用css片段', link: '常用css片段' }],
  '/组件文档/': [
    {
      text: '破产平台',
      collapsible: true,
      prefix: '破产平台/',
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
  ],
});
