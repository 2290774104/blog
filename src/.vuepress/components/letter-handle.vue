<template>
  <div>
    <div class="operate">
      <el-button @click="toUpperCase">全部大写</el-button>
      <el-button @click="toLowerCase">全部小写</el-button>
      <el-button @click="reverseStr">颠倒顺序</el-button>
      <el-button @click="toUpperHeadCase">首字母大写</el-button>
      <el-button @click="toUpperWordHeadCase">每个单词首字母大写</el-button>
      <el-button @click="switchCase">切换大小写</el-button>
    </div>
    <el-input v-model="text" type="textarea" resize="none" rows="12" />
  </div>
</template>

<script lang="ts" setup>
import { ca } from "element-plus/es/locale";
import { ref } from "vue";

const text = ref("");

const toUpperCase = () => {
  text.value = text.value.toUpperCase();
};

const toLowerCase = () => {
  text.value = text.value.toLowerCase();
};

const reverseStr = () => {
  text.value = text.value.split("").reverse().join("");
};

const toUpperHeadCase = () => {
  text.value = titleCase(text.value);
};

const toUpperWordHeadCase = () => {
  const words = text.value.split(" ");
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    words[i] = titleCase(words[i]);
  }
  text.value = words.join(" ");
};

const titleCase = (str: string) => {
  return `${str.slice(0, 1).toUpperCase()}${str.slice(1).toLowerCase()}`;
};

const switchCase = () => {
  const cases = text.value.split("");
  for (let i = 0; i < cases.length; i++) {
    const strCode = cases[i].charCodeAt(0);
    console.log(strCode);
    if (strCode >= 65 && strCode <= 90) {
      cases[i] = cases[i].toLowerCase();
    } else if (strCode >= 97 && strCode <= 122) {
      cases[i] = cases[i].toUpperCase();
    }
  }
  text.value = cases.join("");
};
</script>

<style lang="scss" scoped>
.operate {
  margin-bottom: 20px;
}
</style>
