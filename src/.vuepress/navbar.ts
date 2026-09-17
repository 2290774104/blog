import { navbar } from 'vuepress-theme-hope';

export default navbar([
  '/',
  {
    text: '前端',
    link: '/前端/overview',
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
    text: 'AI',
    prefix: '/AI/',
    children: [
      { text: 'docker安装', link: 'docker安装' },
      { text: 'WSL下载速度提升', link: 'WSL下载速度提升' },
    ],
  },
  {
    text: 'Agent',
    prefix: '/Agent/',
    children: [{ text: '认识agent', link: '认识agent' }],
  },
  {
    text: '工作',
    prefix: '/工作/',
    children: [
      {
        text: '破产平台',
        link: '破产平台/overview',
      },
      {
        text: '牛咔平台',
        link: '牛咔平台/overview',
      },
    ],
  },
  {
    text: '其他',
    prefix: '/其他/',
    children: [
      {
        text: 'Windows批量修改文件名',
        link: 'Windows批量修改文件名',
      },
    ],
  },
]);
