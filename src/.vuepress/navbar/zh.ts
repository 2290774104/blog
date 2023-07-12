import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "学习笔记",
    icon: "discover",
    prefix: "/学习笔记/",
    children: [
      {
        text: "基础",
        prefix: "基础/",
        children: [
          
          { text: "TypeScript", link: "TypeScript" },
          { text: "webpack", link: "webpack" },
        ],
      },
      {
        text: "Vue",
        prefix: "vue/",
        children: [
          { text: "vuepress-v1", link: "vuepress-v1" },
          { text: "Vue3", link: "Vue3" },
        ],
      },
      {
        text: "React",
        prefix: "React/",
        children: [{ text: "React", link: "React" }],
      },
    ],
  },
  {
    text: "项目搭建",
    prefix: "/项目搭建/",
    children: [{ text: "vue2-template", link: "vue2-template" }],
  },
  {
    text: "css",
    prefix: "/css/",
    children: [{ text: "常用css片段", link: "常用css片段" }],
  },
  {
    text: 'node',
    prefix: '/node/',
    children: [
      { text: '高阶函数', link: '高阶函数' },
      { text: "JavaScript异步编程", link: "JavaScript异步编程" },
      { text: "Promise", link: "Promise" },
      { text: "node", link: "node" },
    ]
  },
  {
    text: "架构",
    prefix: "/架构/",
    children: [{ text: "实现简单的React", link: "实现简单的React" }],
  },
  {
    text: "工具库",
    prefix: "/工具库/",
    children: [
      { text: "Vue优雅的引入第三方库", link: "Vue优雅的引入第三方库" },
      {
        text: "tinymce",
        prefix: "tinymce/",
        children: [
          { text: "在Vue中使用tinymce", link: "在Vue中使用tinymce" },
          { text: "tinymce图片上传插件", link: "tinymce图片上传插件" },
        ],
      },
    ],
  },
  {
    text: "组件文档",
    prefix: "/组件文档/",
    children: [
      {
        text: "破产平台",
        prefix: "破产平台/",
        children: [
          { text: "p-tabs", link: "p-tabs" },
          { text: "p-el-select", link: "p-el-select" },
          { text: "p-file-module", link: "p-file-module" },
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
        ]
      }
    ]
  }
]);
