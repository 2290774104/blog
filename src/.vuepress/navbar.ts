import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: '基础',
    prefix: '/基础/',
    children: [
      {
        text: '语法', prefix: '语法/', children: [
          { text: "TypeScript", link: "TypeScript" },
        ]
      },
      {
        text: '打包工具', prefix: '打包工具/', children: [
          { text: "webpack", link: "webpack" },
        ]
      },
    ]
  },
  {
    text: 'Vue',
    prefix: '/Vue/',
    children: []
  },
  {
    text: 'React',
    prefix: '/React/',
    children: []
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
      {
        text: "常用工具",
        prefix: "常用工具/",
        children: [
          { text: "Base64图片处理", link: "Base64图片处理" },
          { text: "UUID生成器", link: "UUID生成器" },
          { text: "字母大小写转换", link: "字母大小写转换" },
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
    text: "wiki",
    prefix: "/wiki/",
    children: [
      {
        text: "破产平台",
        prefix: "破产平台/",
        children: [
          { text: "破产小程序发布流程", link: "破产小程序发布流程" },
          { text: "人脸识别流程", link: "人脸识别流程" },
        ],
      },
    ],
  },
]);
