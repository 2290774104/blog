<template>
  <div class="image-view">
    <component
      :is="currentComponent"
      v-for="(item, index) in modelValue"
      :key="index"
      :info="item"
      :view-type="viewType"
      :url-key="urlKey"
      :title-key="titleKey"
      @edit="handleEdit"
      @remove="handleRemove"
    ></component>
    <slot name="append"></slot>
  </div>
</template>

<script lang="ts" setup>
import { PropType, computed, markRaw } from 'vue';
import ImageCard from './ImageCard.vue';
import ImagePanel from './ImagePanel.vue';

export interface IImage {
  [key: string]: string;
}

export type StyleType = 'panel' | 'card';

export type ViewType = 'edit' | 'view';

const props = defineProps({
  modelValue: {
    type: Array as PropType<IImage[]>,
    required: true,
  },
  // panel 面板  card 卡片
  type: {
    type: String as PropType<StyleType>,
    default: 'panel',
  },
  // edit 可编辑  view 仅查看
  viewType: {
    type: String as PropType<ViewType>,
    default: 'edit',
  },
  urlKey: {
    type: String,
    default: 'url',
  },
  titleKey: {
    type: String,
    default: 'title',
  },
});

const emit = defineEmits(['update:modelValue', 'edit']);

const currentComponent = computed(() => {
  return props.type === 'card' ? markRaw(ImageCard) : markRaw(ImagePanel);
});

const handleEdit = (info: IImage) => {
  emit('edit', info);
};

const handleRemove = (info: IImage) => {
  const oldVal = props.modelValue;
  const index = oldVal.indexOf(info);
  const newVal = oldVal.slice(0, index).concat(oldVal.splice(index + 1));
  emit('update:modelValue', newVal);
};
</script>

<style lang="scss" scoped>
.image-view {
  display: flex;
  flex-flow: row wrap;
}
</style>
