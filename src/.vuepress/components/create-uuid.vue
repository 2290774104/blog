<template>
  <div>
    <el-form inline :model="form">
      <el-form-item label="生成数量：">
        <el-input-number
          v-model="form.num"
          :min="1"
          :precision="0"
          controls-position="right"
        />
      </el-form-item>
      <el-form-item label="是否大写：">
        <el-select v-model="form.isCapital">
          <el-option label="是" value="1" />
          <el-option label="否" value="2" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="handlerCreated">生成</el-button>
        <el-button @click="hanlderCopy">复制</el-button>
        <el-button @click="hanlderReset">清空</el-button>
      </el-form-item>
    </el-form>
    <el-input v-model="uuids" type="textarea" resize="none" rows="12" />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { copyText } from '../utils'

const form = reactive({
  num: 1,
  isCapital: "1",
});

const uuids = ref()

const handlerCreated = () => {
  const uuidList = []
  for (let index = 0; index < form.num; index++) {
    uuidList.push(uuid())
  }
  uuids.value = uuidList.join('\n')
}

const uuid = () => {
  return "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    const result = v.toString(16);
    return form.isCapital === '1' ? result.toUpperCase() : result
  });
};

const hanlderCopy = () => {
  copyText(uuids.value)
}

const hanlderReset = () => {
  uuids.value = ''
}
</script>

<style lang="scss" scoped>
.el-select {
  width: 120px;
}
</style>
