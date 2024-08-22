<template>
  <div class="steps-plus">
    <steps-item
      v-for="(item, index) in stepsList"
      :key="index"
      :step="item"
      :space="space"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import StepsItem from './StepsItem.vue';
import type { IStep } from './StepsItem.vue';

export interface ISteps {
  title: string;
  icon?: string;
}

const props = defineProps({
  active: {
    type: Number,
    required: true,
  },
  steps: {
    type: Array as () => ISteps[],
    required: true,
  },
  space: {
    type: Number,
    default: 154,
  },
});

const defaultIcon = ref(['filter', 'edit', 'setting']);

console.log(props.steps[0]);

const stepsList = computed<IStep[]>(() => {
  return props.steps.map((item, i) => {
    return {
      ...item,
      icon: item.icon || defaultIcon.value[i],
      isLast: i === props.steps.length - 1,
      status:
        props.active === i ? 'process' : props.active > i ? 'success' : 'wait',
    };
  });
});
</script>

<style lang="scss" scoped>
.steps-plus {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background: url('/assets/demo/niuka/StepsPlus/topic-bg.png') no-repeat center;
  color: #2293e6;
}
</style>
