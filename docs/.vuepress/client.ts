import { defineClientConfig } from "@vuepress/client";

// 全量引入element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(ElementPlus);
    // app.use(ElementPlusIconsVue);
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
  
  setup() {},
  rootComponents: [],
});
