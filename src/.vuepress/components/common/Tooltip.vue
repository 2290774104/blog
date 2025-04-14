<template>
  <el-tooltip
    class="box-item"
    content="Top Center prompts info"
    placement="top"
    effect="light"
    trigger="click"
  >
    <template #content>
      <code>{{ content }}</code>
    </template>
    <el-button :icon="Warning" text></el-button>
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
$--code-tooltip-color: (
  light: #0c61c9,
  dark: #000,
);


code {
  color: var(--code-tooltip-color);
}

.el-button {
  padding: 8px;
}
</style>
