<script lang="tsx" setup>
import { ref } from 'vue';
import type { PropType } from 'vue';
import type { IStepItem } from '../types';

const props = defineProps({
  step: {
    type: Object as PropType<IStepItem>,
    required: true,
  },
  space: {
    type: Number,
    default: 154,
  },
});

const miidStyle = ref({
  width: `${props.space}px`,
});

const App = () => {
  return (
    <div class="steps-item">
      <div class={['steps-icon', props.step.status, props.step.icon]}></div>
      <div class="steps-title">{props.step.title}</div>
      {props.step.isLast ? null : (
        <div class="steps-mid" style={miidStyle.value}></div>
      )}
    </div>
  );
};
</script>

<template>
  <App />
</template>
