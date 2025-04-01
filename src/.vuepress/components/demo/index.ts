import type { App } from 'vue';
// 引入Demo预览组件，于本地插件中动态替换 ::: demo ::: 标签
import PreviewComponents from './PreviewComponents.vue';
import ClickButton from './ClickButton.vue';
import DefineProps from './DefineProps.vue';
//
import ToolTip from './ToolTip.vue';
// 牛咔平台步骤条组件
import NiukaStepsBasicUsage from './niuka/NiukaSteps/BasicUsage.vue';
// 牛咔平台带面板的开关组件
import NiukaSwitchBasicUsage from './niuka/NiukaSwitch/BasicUsage.vue';
import NiukaSwitchCompleteUsage from './niuka/NiukaSwitch/CompleteUsage.vue';
import ImageViewBasicUsage from './niuka/ImageView/BasicUsage.vue';

const utilsComponent: any = {
  PreviewComponents,
  ClickButton,
  DefineProps,
  ToolTip,
  NiukaStepsBasicUsage,
  NiukaSwitchBasicUsage,
  NiukaSwitchCompleteUsage,
  ImageViewBasicUsage,
};

export default {
  install(app: App) {
    Object.keys(utilsComponent).forEach((key: string) => {
      app.component(key, utilsComponent[key]);
    });
  },
};
