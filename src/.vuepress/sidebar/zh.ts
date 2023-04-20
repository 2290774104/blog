import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/学习笔记/": [
    {
      text: "基础",
      collapsible: true,
      prefix: "基础/",
      children: "structure",
    },
    {
      text: "Vue",
      collapsible: true,
      prefix: "Vue/",
      children: "structure",
    },
    {
      text: "React",
      collapsible: true,
      prefix: "React/",
      children: "structure",
    },
  ],
  "/项目搭建/": [{ text: "vue2-template", link: "vue2-template" }],
  "/css/": [{ text: "常用css片段", link: "常用css片段" }],
  "/架构/": [{ text: "实现简单的React", link: "实现简单的React" }],
  "/工具库/": [
    { text: "Vue优雅的引入第三方库", link: "Vue优雅的引入第三方库" },
    {
      text: "tinymce",
      collapsible: true,
      prefix: "tinymce/",
      children: "structure",
    },
  ],
  "/组件文档/": [
    { text: "p-tabs", link: "p-tabs" },
  ]
});
