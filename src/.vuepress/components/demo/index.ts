import type { App } from 'vue';
// 引入Demo预览组件，于本地插件中动态替换 ::: demo ::: 标签
import PreviewComponents from './PreviewComponents.vue';
import ClickButton from './ClickButton.vue';
import DefineProps from './DefineProps.vue';
// 牛咔平台步骤条插件
import StepsPlusBasicUsage from './niuka/StepsPlus/BasicUsage.vue';

const utilsComponent: any = {
  PreviewComponents,
  ClickButton,
  DefineProps,
  StepsPlusBasicUsage,
};

export default {
  install(app: App) {
    Object.keys(utilsComponent).forEach((key: string) => {
      app.component(key, utilsComponent[key]);
    });
  },
};
