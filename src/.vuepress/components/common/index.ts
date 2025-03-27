import type { App } from 'vue';
import OverviewList from './OverviewList.vue';

const utilsComponent: any = {
  OverviewList,
};

export default {
  install(app: App) {
    Object.keys(utilsComponent).forEach((key: string) => {
      app.component(key, utilsComponent[key]);
    });
  },
};
