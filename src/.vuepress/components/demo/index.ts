import type { App } from 'vue';
// 引入Demo预览组件，于本地插件中动态替换 ::: demo ::: 标签
import PreviewComponents from './preview-components.vue';
import ClickButton from './click-button.vue';

const utilsComponent: any = {
  PreviewComponents,
  ClickButton
};

export default {
  install(app: App) {
    Object.keys(utilsComponent).forEach((key: string) => {
      app.component(key, utilsComponent[key]);
    });
  },
};
