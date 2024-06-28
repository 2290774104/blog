import { defineClientConfig } from '@vuepress/client';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs';

import utils from './components/utils';
import demo from './components/demo'

import http from './http';

export default defineClientConfig({
  enhance({ app }) {
    app.use(ElementPlus, { locale: zhCn });

    app.use(utils)
    app.use(demo)

    app.config.globalProperties.http = http;
  },

  setup() {},

  rootComponents: [],
});
