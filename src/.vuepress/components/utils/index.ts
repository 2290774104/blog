import type { App } from 'vue';
import PictureBase64 from './picture-base64.vue';
import Base64Picture from './base64-picture.vue';
import CreateUuid from './create-uuid.vue';
import LetterHandle from './letter-handle.vue';
import TimeConversion from './time-conversion.vue';
import BaiduMap from './baidu-map.vue';
import UrlCode from './url-code.vue'

const utilsComponent: any = {
  PictureBase64,
  Base64Picture,
  CreateUuid,
  LetterHandle,
  TimeConversion,
  BaiduMap,
  UrlCode
};

export default {
  install(app: App) {
    Object.keys(utilsComponent).forEach((key: string) => {
      app.component(key, utilsComponent[key]);
    });
  },
};
