<template>
  <el-tooltip
    class="box-item"
    effect="light"
    content="Top Left prompts info"
    trigger="click"
  >
    <template #content>
      <code> {{ content }} </code>
    </template>
    <el-button text
      ><el-icon><Warning /></el-icon
    ></el-button>
  </el-tooltip>
</template>

<script lang="ts" setup>
import { Warning } from '@element-plus/icons-vue';

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
code {
  color: #0c61c9;
  background-color: #f5f7fa;
}

.el-button {
    padding: 8px;
}
</style>
