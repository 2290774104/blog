import { sidebar } from 'vuepress-theme-hope';

export const zhSidebar = sidebar({
  '/前端/': [
    {
      text: '学习笔记',
      collapsible: true,
      prefix: '学习笔记/',
      children: 'structure'
    },
    {
      text: 'css',
      collapsible: true,
      prefix: 'css/',
      children: 'structure'
    },
    {
      text: '项目搭建',
      collapsible: true,
      prefix: '项目搭建/',
      children: 'structure'
    }
  ]
});
