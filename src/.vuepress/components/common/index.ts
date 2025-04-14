import type { App } from 'vue';
import OverviewList from './OverviewList.vue';
import Tooltip from './Tooltip.vue';

const utilsComponent: any = {
  OverviewList,
  Tooltip
};

export default {
  install(app: App) {
    Object.keys(utilsComponent).forEach((key: string) => {
      app.component(key, utilsComponent[key]);
    });
  },
};
