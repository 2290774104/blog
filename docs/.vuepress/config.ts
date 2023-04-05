// config.ts配置文件

// 配置文件
import { defineUserConfig } from "vuepress";
import { tangTheme } from './theme'
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { getDirname ,path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  // 语言 默认是en-US
  lang: "zh-CN",
  // 标题
  title: "tang’blog",
  description: "唐皓晨的博客",
  // 基础路径
  base: "/",
  // 渲染在HTML <head>标签内的额外内容
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/logo.png",
      },
    ],
  ],
  // 指定开发服务器的端口默认8080
  port: 8080,
  // 指定vuepress build命令的输出目录
  dest: "./dist",
  // 自定义主题配置
  theme: tangTheme({
    logo: "/logo.png",
    navbar: [
      { text: '主页', link: '/', icon: 'HomeFilled' },
      { text: '指南', link: '/framework/guide/development.md' },
      { text: '组件', link: '/framework/components/button.md' },
    ],
  }),
  plugins: [
    // vue 组件全局注册，注册后的组件在markdown中既可以直接以标签方式渲染
    // 如以上目录结构中<Button/>渲染 ；嵌套文件则是<Form-Basic/>这种方式
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],
});
