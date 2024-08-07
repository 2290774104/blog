import type { App } from 'vue';
import PictureBase64 from './PictureBase64.vue';
import Base64Picture from './Base64Picture.vue';
import CreateUuid from './CreateUuid.vue';
import LetterHandle from './LetterHandle.vue';
import TimeConversion from './TimeConversion.vue';
import BaiduMap from './BaiduMap.vue';
import UrlCode from './UrlCode.vue'
import ConvertCss from './ConvertCss.vue'

const utilsComponent: any = {
  PictureBase64,
  Base64Picture,
  CreateUuid,
  LetterHandle,
  TimeConversion,
  BaiduMap,
  UrlCode,
  ConvertCss
};

export default {
  install(app: App) {
    Object.keys(utilsComponent).forEach((key: string) => {
      app.component(key, utilsComponent[key]);
    });
  },
};
