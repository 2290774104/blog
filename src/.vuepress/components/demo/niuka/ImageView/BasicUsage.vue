<template>
  <div>
    <image-view
      v-model="list"
      @edit="handleEdit"
      :key="loadKey"
      :type="type"
      :view-type="viewType"
    >
      <template #append v-if="pattern === 'change'">
        <el-button @click="handleChange">切换风格</el-button>
      </template>
    </image-view>
    <el-dialog v-model="dialogVisible" title="编辑图片" width="500">
      <el-form :model="form" label-width="auto">
        <el-form-item label="图片地址：">
          <el-input v-model="form.url" />
        </el-form-item>
        <el-form-item label="图标标题：">
          <el-input v-model="form.title" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleSubmit"> 确定 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { PropType } from 'vue';
import { uuid } from '@utils';
import ImageView from './ImageView.vue';
import type { StyleType, ViewType } from './ImageView.vue';
import { cloneDeep } from 'lodash';

type Pattern = 'panel' | 'card' | 'change';

interface IImage {
  url: string;
  title: string;
}

const props = defineProps({
  viewType: {
    type: String as PropType<ViewType>,
    default: 'edit',
  },
  pattern: {
    type: String as PropType<Pattern>,
    default: 'panel',
  },
});

const list = ref<IImage[]>([
  {
    url: 'https://www.baidu.com/img/flexible/logo/pc/index.png',
    title: '百度logo',
  },
]);

const dialogVisible = ref(false);

const form = ref<IImage>({
  url: '',
  title: '',
});

const editIndex = ref();

const handleEdit = (info: IImage) => {
  form.value = cloneDeep(info);
  editIndex.value = list.value.indexOf(info);
  dialogVisible.value = true;
};

const handleSubmit = () => {
  list.value[editIndex.value] = cloneDeep(form.value);
  dialogVisible.value = false;
};

const type = ref<StyleType>('panel');

if (props.pattern === 'card') {
  type.value = 'card';
}

const handleChange = () => {
  if (type.value === 'panel') {
    type.value = 'card';
  } else {
    type.value = 'panel';
  }
};

const loadKey = ref(uuid());

// 延时后重载组件，避免主题内置图片预览和组件内置预览重叠
setTimeout(() => {
  loadKey.value = uuid();
}, 1000);
</script>

<style lang="scss" scoped></style>
