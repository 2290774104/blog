<template>
  <el-row>
    <el-col :span="12">
      <niuka-switch v-model="value" :info="info"></niuka-switch>
    </el-col>
    <el-col :span="12" class="result"> 当前开关的值：{{ value }} </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import NiukaSwitch from './index.vue';

const value = ref('2');

const info = ref({
  label: '开关label',
  props: 'value',
  activeValue: '1',
  inactiveValue: '2',
});
</script>

<style lang="scss" scoped>
.result {
  display: flex;
  align-items: center;
  padding: 0 20px;
}
</style>
