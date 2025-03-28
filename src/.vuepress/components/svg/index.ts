import type { App } from 'vue';
import SvgIcon from './index.vue';

const utilsComponent: any = {
  SvgIcon,
};

export default {
  install(app: App) {
    Object.keys(utilsComponent).forEach((key: string) => {
      app.component(key, utilsComponent[key]);
    });
  },
};
