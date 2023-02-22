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
          { text: 'vuepress-v1', link: 'vuepress-v1' }
        ]
      }
    ]
  },
]);
