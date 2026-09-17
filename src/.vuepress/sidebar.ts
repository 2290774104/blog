import { sidebar } from 'vuepress-theme-hope';

export default sidebar({
  '/前端/': [
    { text: '总览', link: 'overview' },
    {
      text: 'css',
      collapsible: true,
      prefix: 'css/',
      children: 'structure',
    },
    {
      text: 'js',
      collapsible: true,
      prefix: 'js/',
      children: 'structure',
    },
    {
      text: 'Vue',
      collapsible: true,
      prefix: 'Vue/',
      children: 'structure',
    },
    {
      text: 'React',
      collapsible: true,
      prefix: 'React/',
      children: 'structure',
    },
    {
      text: '微信小程序',
      collapsible: true,
      prefix: '微信小程序/',
      children: 'structure',
    },
    {
      text: '微前端',
      collapsible: true,
      prefix: '微前端/',
      children: 'structure',
    },
    {
      text: '工具库',
      collapsible: true,
      prefix: '工具库/',
      children: 'structure',
    },
    {
      text: '资源',
      collapsible: true,
      prefix: '微前端/',
      children: 'structure',
    },
    {
      text: '打包工具',
      collapsible: true,
      prefix: '打包工具/',
      children: 'structure',
    },
    {
      text: '踩坑记录',
      collapsible: true,
      prefix: '踩坑记录/',
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
  '/AI/': [
    { text: 'docker安装', link: 'docker安装' },
    { text: 'WSL下载速度提升', link: 'WSL下载速度提升' },
  ],
  '/工作/': [
    {
      text: '破产平台',
      prefix: '破产平台/',
      children: 'structure',
    },
    {
      text: '牛咔平台',
      prefix: '牛咔平台/',
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
