<template>
  <div class="image-panel">
    <div class="mark">
      <p class="mark-title textEllipsis">{{ info[titleKey] }}</p>
      <el-icon v-if="isEdit" @click="handleEdit"><EditPen /></el-icon>
    </div>
    <div class="remove" v-if="isEdit" @click="handleRemove">
      <el-icon class="default"><CircleClose /></el-icon>
      <el-icon class="hover"><CircleCloseFilled /></el-icon>
    </div>
    <el-image
      v-if="showDefault"
      src="/assets/demo/niuka/ImageView/default.png"
    ></el-image>
    <el-image
      v-else
      :src="info[urlKey]"
      :preview-src-list="[info[urlKey]]"
      :preview-teleported="true"
    ></el-image>
  </div>
</template>

<script lang="ts" setup>
import { PropType, computed } from 'vue';
import {
  EditPen,
  CircleClose,
  CircleCloseFilled,
} from '@element-plus/icons-vue';
import type { ViewType } from './ImageView.vue';

const props = defineProps({
  // edit 可编辑  view 仅查看
  viewType: {
    type: String as PropType<ViewType>,
    default: 'edit',
  },
  info: {
    type: Object,
    required: true,
  },
  urlKey: {
    type: String,
    default: 'url',
  },
  titleKey: {
    type: String,
    default: 'title',
  },
  showDefault: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['edit', 'remove']);

const isEdit = computed(() => {
  return props.viewType === 'edit';
});

const handleEdit = () => {
  emit('edit', props.info);
};

const handleRemove = () => {
  emit('remove', props.info);
};
</script>

<style lang="scss" scoped>
.image-panel {
  position: relative;
  margin: 0 10px 10px 0;
  border: 1px solid #cfd8e6;
  width: 180px;
  height: 100px;

  &:hover {
    border-color: #2293e6;
  }

  .mark {
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    padding: 5px;
    width: 100%;
    height: 32px;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    color: #fff;
    box-sizing: border-box;

    .mark-title {
      width: 100%;
    }

    .el-icon {
      flex-shrink: 0;
      cursor: pointer;
    }
  }

  &:hover .mark {
    background: #2293e6;
  }

  .el-image {
    width: 100%;
    height: 100%;
  }

  .remove {
    position: absolute;
    top: -8px;
    right: -8px;
    display: flex;
    border-radius: 50%;
    overflow: hidden;
    width: 20px;
    height: 20px;
    background: #fff;
    cursor: pointer;
    color: #959ca6;
    font-size: 20px;
    z-index: 1;
  }

  .hover {
    display: none;
    color: #2293e6;
  }

  &:hover .default {
    display: none;
  }

  &:hover .hover {
    display: block;
  }
}

// .image-panel:hover .el-icon-circle-close {
//   display: none;
// }

// .el-icon-error

// .image-panel:hover .el-icon-error {
//   display: block;
// }
</style>
