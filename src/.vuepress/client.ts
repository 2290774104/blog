import { defineClientConfig } from '@vuepress/client';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs';

import utils from './components/utils';
import demo from './components/demo';

import http from './http';

const html = document.querySelector('html')!;
const callback: MutationCallback = (mutationsList, observer) => {
  const mutations = mutationsList.find((o) => o.attributeName === 'data-theme');
  if (mutations) {
    const isDark = html.getAttribute('data-theme') === 'dark'
    if (isDark) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }
};
const mutationObserver = new MutationObserver(callback);
mutationObserver.observe(html, { attributes: true });

export default defineClientConfig({
  enhance({ app }) {
    app.use(ElementPlus, { locale: zhCn });

    app.use(utils);
    app.use(demo);

    app.config.globalProperties.http = http;
  },

  setup() {},

  rootComponents: [],
});
