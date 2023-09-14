import { defineClientConfig } from "@vuepress/client";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css"

import PictureBase64 from "./components/picture-base64.vue";
import Base64Picture from "./components/base64-picture.vue";
import CreateUuid from './components/create-uuid.vue'
import LetterHandle from './components/letter-handle.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.use(ElementPlus)

    app.component("PictureBase64", PictureBase64);
    app.component("Base64Picture", Base64Picture);
    app.component("CreateUuid", CreateUuid);
    app.component("LetterHandle", LetterHandle);
  },

  setup() {},

  rootComponents: [],
});
