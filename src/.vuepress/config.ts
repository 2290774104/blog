import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  locales: {
    // "/": {
    //   lang: "en-US",
    //   title: "Blog Demo",
    //   description: "A blog demo for vuepress-theme-hope",
    // },
    "/": {
      lang: "zh-CN",
      title: "tang’blog",
      description: "唐皓晨的博客",
    },
  },

  theme,

  shouldPrefetch: false,
});
