<script lang="tsx" setup>
import '../styles/index.scss';
import type { IStep, IStepItem } from '../types';
import { ref, type PropType, computed } from 'vue';
import NiukaStepsItem from '../components/NiukaStepsItem.vue';

const props = defineProps({
  active: {
    type: Number,
    required: true,
  },
  steps: {
    type: Array as PropType<IStep[]>,
    required: true,
  },
  space: {
    type: Number,
    default: 154,
  },
});

const defaultIcon = ref(['filter', 'edit', 'setting']);

const stepsList = computed<IStepItem[]>(() => {
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

const App = () => {
  const renderItem = (stepsList: IStepItem[]) =>
    stepsList.map((i) => {
      return <NiukaStepsItem step={i} space={props.space}></NiukaStepsItem>;
    });

  return <div class="steps-plus">{renderItem(stepsList.value)}</div>;
};
</script>

<template>
  <App />
</template>
