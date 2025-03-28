<template>
  <div class="svg-icon">
    <component :is="svg"></component>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import IconSwitch from './modules/Switch.vue';
import IconSteps from './modules/Steps.vue';

const components = {
  switch: IconSwitch,
  steps: IconSteps,
};

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
});

const svg = computed(() => {
  return components[props.icon];
});
</script>

<style lang="scss" scoped>
.svg-icon {
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: auto;
    max-height: 100%;
  }
}
</style>
