import type { App } from 'vue';

import DownloadSwiper from './DownloadSwiper.vue'

const utilsComponent: any = {
    DownloadSwiper
};

export default {
  install(app: App) {
    Object.keys(utilsComponent).forEach((key: string) => {
      app.component(key, utilsComponent[key]);
    });
  },
};
