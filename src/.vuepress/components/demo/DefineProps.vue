<template>
  <div class="text1">这是text1：{{ text1 }}</div>
  <div class="text2">这是text2：{{ text2 }}</div>
</template>

<script lang="ts" setup>
const props = defineProps({
  text1: {
    type: String,
    default: '这是文本1默认值',
  },
  text2: {
    type: String,
    required: true,
    validator(value: unknown, props) {
      return typeof value === 'string';
    },
  },
});
</script>
