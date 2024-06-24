import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "tang’blog",
  description: "唐皓晨的博客",

  theme,

  bundler: viteBundler({
    viteOptions: {
      server: {
        proxy: {
          '/map': {
            target: 'http://api.map.baidu.com',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/map/, "")
          }
        }
      }
    },
    vuePluginOptions: {}
  })

  // Enable it with pwa
  // shouldPrefetch: false,
});
