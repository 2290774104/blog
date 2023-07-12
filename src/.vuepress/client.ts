import { defineClientConfig } from "@vuepress/client";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import MyComponent from "./components/MyComponent.vue";
import PictureBase64 from "./components/picture-base64.vue";
import Base64Picture from "./components/base64-picture.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.use(ElementPlus);

    app.component("MyComponent", MyComponent);
    app.component("PictureBase64", PictureBase64);
    app.component("Base64Picture", Base64Picture);
  },

  setup() {},

  rootComponents: [],
});
