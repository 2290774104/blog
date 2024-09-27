import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';
import { searchProPlugin } from 'vuepress-plugin-search-pro';
import theme from './theme';
// 使用本地Demo预览插件
import { previewDemoPlugin } from '../../plugins/markdown/plugin-preview-demo';
import vueJsx from '@vitejs/plugin-vue-jsx';

import path from 'path';

const resolve = (src: string) => path.join(__dirname, src);

export default defineUserConfig({
  base: '/blog/',

  lang: 'zh-CN',
  title: 'tang’blog',
  description: '唐皓晨的博客',

  theme,

  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: {
          '@utils': resolve('./utils'),
          '@icons': resolve('./components/icons'),
        },
      },
      plugins: [vueJsx()],
      server: {
        proxy: {
          '/map': {
            target: 'http://api.map.baidu.com',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/map/, ''),
          },
        },
      },
    },
    vuePluginOptions: {},
  }),

  plugins: [
    searchProPlugin({
      autoSuggestions: true,
    }),
    previewDemoPlugin({}),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
