<template>
  <el-row class="base64-picture">
    <el-col :span="12" class="picture-input">
      <p>
        base64输入
        <el-button @click="hanlderPaste">粘贴</el-button>
        <el-button @click="hanlderReset">清空</el-button>
      </p>
      <el-input
        class="input-wrap"
        v-model="url"
        type="textarea"
        resize="none"
      />
    </el-col>
    <el-col :span="12" class="picture-preview">
      <p>
        图片预览
        <el-button @click="handlerDownload">下载</el-button>
      </p>
      <div class="image-wrap">
        <el-image
          v-if="url"
          style="width: 100%; height: 100%"
          :src="url"
          fit="contain"
        />
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const url = ref();

const hanlderPaste = () => {
  navigator.clipboard.readText().then((data) => {
    url.value = data;
  });
};

const hanlderReset = () => {
  url.value = "";
};

const handlerDownload = () => {
  const arr = url.value.split(",");
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  const blob = new Blob([u8arr], { type: mime });
  const fileUrl = URL.createObjectURL(blob);
  console.log(fileUrl);
  const a = document.createElement("a");
  a.href = fileUrl;
  a.download = uuid();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const uuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
</script>

<style lang="scss">
.base64-picture {
  padding: 20px;

  .picture-upload {
    height: 208px;
  }

  .picture-input,
  .picture-preview {
    height: 350px;

    p {
      margin-top: 0;
      height: 35px;
      line-height: 35px;
    }
  }

  .picture-input {
    padding-right: 15px;

    .input-wrap {
      margin-top: 3px;
      height: calc(100% - 35px);
      border-radius: 6px;

      textarea {
        height: 100%;
        border: 0 none;
      }
    }
  }

  .picture-preview {
    padding-left: 15px;

    .image-wrap {
      border: 1px dashed #dcdfe6;
      margin-top: 3px;
      height: calc(100% - 35px);
      border-radius: 6px;
    }
  }
}
</style>