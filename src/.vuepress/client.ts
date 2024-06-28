import { defineClientConfig } from '@vuepress/client';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs';


import ClickButton from './components/click-button.vue';
// import BaiduMap from './components/baidu-map.vue';
import utils from './components/utils';
// 引入Demo预览组件，于本地插件中动态替换 ::: demo ::: 标签
import PreviewComponents from './components/PreviewComponents/index.vue';

import http from './http';

export default defineClientConfig({
  enhance({ app }) {
    app.use(ElementPlus, { locale: zhCn });

    app.use(utils)

    app.config.globalProperties.http = http;

    app.component('ClickButton', ClickButton);
    app.component('PreviewComponents', PreviewComponents);
  },

  setup() {},

  rootComponents: [],
});
