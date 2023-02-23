import { navbar } from 'vuepress-theme-hope';

export const zhNavbar = navbar([
  '/',
  {
    text: '前端',
    icon: 'discover',
    prefix: '/前端/',
    children: [
      {
        text: '学习笔记',
        prefix: '学习笔记/',
        children: [
          { text: 'vuepress-v1', link: 'vuepress-v1' },
          { text: 'JavaScript异步编程', link: 'JavaScript异步编程' },
          { text: 'TypeScript', link: 'TypeScript' },
          { text: 'Vue3', link: 'Vue3' },
          { text: 'webpack', link: 'webpack' },
        ]
      },
      {
        text: 'css',
        prefix: 'css/',
        children: [
          { text: '常用css片段', link: '常用css片段' },
        ]
      },
      {
        text: '项目搭建',
        prefix: '项目搭建/',
        children: [
          { text: 'vue2-template', link: 'vue2-template' },
        ]
      }
    ]
  },
  {
    text: '工具库',
    prefix: '/工具库/',
    children: [
      { text: 'Vue优雅的引入第三方库', link: 'Vue优雅的引入第三方库' }
    ]
  }
]);
