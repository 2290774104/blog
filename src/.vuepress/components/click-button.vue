<template>
  <div>
    <el-button @click="handleClick">click</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus';

const handleClick = () => {
  ElMessage.info('按钮点击了');
};
</script>

<style lang="scss" scoped></style>
