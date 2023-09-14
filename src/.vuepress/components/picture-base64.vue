<template>
  <el-row class="picture-base64">
    <el-col :span="24" class="picture-upload">
      <el-upload
        v-model:file-list="fileList"
        action="#"
        :limit="1"
        drag
        :before-upload="beforeUpload"
        :on-success="uploadSuccess"
      >
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">拖动或<em>点击</em>上传图片</div>
        <template #tip>
          <div class="el-upload__tip">可拖到上传图片</div>
        </template>
      </el-upload>
    </el-col>
    <el-col :span="12" class="picture-preview">
      <p>图片预览</p>
      <div class="image-wrap">
        <el-image
          v-if="url"
          style="width: 100%; height: 100%"
          :src="url"
          fit="contain"
        />
      </div>
    </el-col>
    <el-col :span="12" class="picture-output">
      <p>
        base64输出
        <el-button @click="hanlderCopy">复制</el-button>
        <el-button @click="hanlderReset">清空</el-button>
      </p>
      <el-input
        class="output-wrap"
        v-model="url"
        type="textarea"
        resize="none"
        readonly
      />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { copyText } from '../utils'
import type { UploadUserFile } from "element-plus";
import { UploadFilled } from "@element-plus/icons-vue";

const fileList = ref<UploadUserFile[]>([]);

const url = ref();

const beforeUpload = (file: File) => {
  fileList.value = [];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    url.value = reader.result;
  };
  return true;
};

const hanlderCopy = () => {
  copyText(url.value)
};

const hanlderReset = () => {
  url.value = "";
  fileList.value = [];
};
</script>

<style lang="scss">
.picture-base64 {
  padding: 20px;

  .picture-upload {
    height: 250px;
  }

  .picture-preview,
  .picture-output {
    height: 350px;

    p {
      height: 35px;
      line-height: 35px;
    }
  }

  .picture-preview {
    padding-right: 15px;

    .image-wrap {
      border: 1px dashed #dcdfe6;
      margin-top: 3px;
      height: calc(100% - 35px);
      border-radius: 6px;
    }
  }

  .picture-output {
    padding-left: 15px;

    .output-wrap {
      margin-top: 3px;
      height: calc(100% - 35px);
      border-radius: 6px;

      textarea {
        height: 100%;
        border: 0 none;
      }
    }
  }
}
</style>