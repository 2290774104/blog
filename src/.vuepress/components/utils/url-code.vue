<template>
  <el-row class="url-code">
    <el-col :span="10">
      <el-input
        class="input-wrap"
        v-model="inputText"
        type="textarea"
        resize="none"
      />
    </el-col>
    <el-col :span="4" class="button-wrap">
      <el-checkbox v-model="checked">
        <el-tooltip
          class="item"
          effect="dark"
          content=", / ? : @ & = + $ #"
          placement="top"
        >
          过滤特殊字符
        </el-tooltip>
      </el-checkbox>
      <el-button @click="handleDecode">解码</el-button>
      <el-button @click="handleEncode">编码</el-button>
      <el-button @click="handleChange">交换</el-button>
      <el-button @click="handleCopy">复制结果</el-button>
    </el-col>
    <el-col :span="10">
      <el-input
        class="input-wrap"
        v-model="outputText"
        type="textarea"
        resize="none"
        readonly
      />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { copyText } from '@utils';

const inputText = ref('');
const outputText = ref('');
const checked = ref(true);

const handleDecode = () => {
  const deCodeFn = checked.value ? decodeURI : decodeURIComponent;
  outputText.value = deCodeFn(inputText.value);
};

const handleEncode = () => {
  const enCodeFn = checked.value ? encodeURI : encodeURIComponent;
  outputText.value = enCodeFn(inputText.value);
};

const handleChange = () => {
  const tenp = inputText.value;
  inputText.value = outputText.value;
  outputText.value = tenp;
};

const handleCopy = () => {
  copyText(outputText.value)
};
</script>

<style lang="scss" scoped>
.url-code {
  .input-wrap {
    height: 350px;
    border-radius: 6px;

    :deep(textarea) {
      height: 100%;
      border: 0 none;
    }
  }

  .button-wrap {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    .el-button {
      margin-left: 0;
      + .el-button {
        margin-top: 10px;
      }
    }
  }
}
</style>
