import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "tang’blog",
  description: "唐皓晨的博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
