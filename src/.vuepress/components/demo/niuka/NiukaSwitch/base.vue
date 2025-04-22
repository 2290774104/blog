<template>
  <div>
    <niuka-switch
      v-model="value"
      :info="info"
      @change="handleChange"
    ></niuka-switch>
    当前开关的值：{{ value }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import NiukaSwitch from './index.vue';
import { ElMessage } from 'element-plus';

const value = ref('2');

const info = ref({
  label: '开关label',
  props: 'value',
  activeValue: '1',
  inactiveValue: '2',
});

const handleChange = (value: string) => {
  ElMessage({
    message: `当前开关的值是：${value}`,
    type: 'info',
  });
};
</script>

<style lang="scss" scoped></style>
