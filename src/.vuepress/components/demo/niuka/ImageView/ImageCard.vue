<template>
  <div class="image-card">
    <div class="mark">
      <el-icon @click="handleView"><ZoomIn /></el-icon>
      <el-icon v-if="isEdit && showEdit" @click="handleEdit">
        <EditPen />
      </el-icon>
      <el-icon v-if="isEdit" @click="handleRemove"><Delete /></el-icon>
    </div>
    <el-image
      ref="imageRef"
      :src="info[urlKey]"
      fit="scale-down"
      :preview-src-list="[info[urlKey]]"
      :preview-teleported="true"
    ></el-image>
  </div>
</template>

<script lang="ts" setup>
import { PropType, computed, ref } from 'vue';
import type { ViewType } from './ImageView.vue';
import { ZoomIn, EditPen, Delete } from '@element-plus/icons-vue';

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
  showEdit: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['edit', 'remove']);

const isEdit = computed(() => {
  return props.viewType === 'edit';
});

const imageRef = ref();

const handleView = () => {
  console.log(imageRef.value.$el.querySelector('img'));
  
  imageRef.value.$el.querySelector('img').click();
};

const handleEdit = () => {
  emit('edit', props.info);
};

const handleRemove = () => {
  emit('remove', props.info);
};
</script>

<style lang="scss" scoped>
.image-card {
  position: relative;
  margin: 0 10px 10px 0;
  border: 1px solid #c0ccda;
  border-radius: 6px;
  box-sizing: border-box;
  width: 148px;
  height: 148px;

  .mark {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s;

    .el-icon {
      margin: 10px;
      font-size: 20px;
      color: #fff;
      cursor: pointer;
    }
  }

  &:hover .mark {
    opacity: 1;
  }

  .el-image {
    width: 100%;
    height: 100%;
  }
}
</style>
