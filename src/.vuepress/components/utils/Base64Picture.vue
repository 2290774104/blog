<template>
  <el-row class="base64-picture">
    <el-col :span="12" class="picture-input">
      <p>
        base64输入
        <el-button class="paste-button" @click="hanlderPaste">粘贴</el-button>
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
        <el-button class="download-button" @click="handleDownload">下载</el-button>
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
import { ref } from 'vue';
import { dataURLtoBlob, uuid } from '@utils'
import { ElRow, ElCol, ElButton, ElInput, ElImage } from 'element-plus';

const url = ref();

defineExpose({ url })

const hanlderPaste = () => {
  navigator.clipboard.readText().then((data) => {
    url.value = data;
  });
};

const hanlderReset = () => {
  url.value = '';
};

const handleDownload = () => {
  const blob = dataURLtoBlob(url.value)
  const fileUrl = URL.createObjectURL(blob);
  console.log(fileUrl);
  const a = document.createElement('a');
  a.href = fileUrl;
  a.download = uuid();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
</script>

<style lang="scss" scoped>
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

      :deep(textarea) {
        height: 100%;
        border: 0 none;
      }
    }
  }

  .picture-preview {
    padding-left: 15px;

    .image-wrap {
      border: 1px dashed var(--el-border-color);
      margin-top: 3px;
      height: calc(100% - 35px);
      border-radius: 6px;

      &:hover {
        border-color: var(--el-color-primary);
      }
    }
  }
}
</style>
