import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/基础/": [
    {
      text: "语法",
      collapsible: true,
      prefix: "语法/",
      children: "structure",
    },
    {
      text: "打包工具",
      collapsible: true,
      prefix: "打包工具/",
      children: "structure",
    },
  ],
  "/工具库/": [
    { text: "Vue优雅的引入第三方库", link: "Vue优雅的引入第三方库" },
    {
      text: "tinymce",
      collapsible: true,
      prefix: "tinymce/",
      children: "structure",
    },
    {
      text: "常用工具",
      collapsible: true,
      prefix: "常用工具/",
      children: "structure",
    },
  ],
  "/组件文档/": [
    {
      text: "破产平台",
      collapsible: true,
      prefix: "破产平台/",
      children: "structure",
    },
  ],
  "/wiki/": [
    {
      text: "破产平台",
      collapsible: true,
      prefix: "破产平台/",
      children: "structure",
    },
  ],
});
