<template>
  <div>
    <niuka-steps :active="active" :steps="steps" :space="space"></niuka-steps>
    <div class="mt20" v-if="operation">
      <el-button type="primary" v-if="active < 2" @click="active++">
        下一步
      </el-button>
      <el-button type="primary" plain v-if="active > 0" @click="active--">
        上一步
      </el-button>
      当前的步骤是：{{ steps[active].title }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import NiukaSteps from './modules/NiukaSteps.vue';

const props = defineProps({
  space: {
    type: Number,
    default: 90,
  },
  icon: {
    type: String,
    default: '',
  },
  operation: {
    type: Boolean,
    default: false,
  },
});

const active = ref(0);

const steps = ref(
  props.operation
    ? [
        { title: '设置基本信息', icon: props.icon },
        { title: '设置直播功能', icon: props.icon },
        { title: '设置直播详情', icon: props.icon },
      ]
    : [
        { title: '步骤1', icon: props.icon },
        { title: '步骤2', icon: props.icon },
        { title: '步骤3', icon: props.icon },
      ]
);
</script>

<style lang="scss" scoped>
.mt20 {
  margin-top: 20px;
}
</style>
