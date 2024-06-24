import { defineClientConfig } from '@vuepress/client';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs';

import PictureBase64 from './components/picture-base64.vue';
import Base64Picture from './components/base64-picture.vue';
import CreateUuid from './components/create-uuid.vue';
import LetterHandle from './components/letter-handle.vue';
import TimeConversion from './components/time-conversion.vue';
import ClickButton from './components/click-button.vue';

import http from './http';

export default defineClientConfig({
  enhance({ app }) {
    app.use(ElementPlus, { locale: zhCn });

    app.config.globalProperties.http = http;

    app.component('PictureBase64', PictureBase64);
    app.component('Base64Picture', Base64Picture);
    app.component('CreateUuid', CreateUuid);
    app.component('LetterHandle', LetterHandle);
    app.component('TimeConversion', TimeConversion);
    app.component('ClickButton', ClickButton);
  },

  setup() {},

  rootComponents: [],
});
