<template>
  <div v-if="!userOnly">
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
  <div v-if="pattern === 'onlyPanel'">
    <image-panel
      :key="loadKey"
      :info="info"
      :view-type="showDefault ? 'view' : 'edit'"
      :show-default="showDefault"
      @edit="handleEdit"
      @remove="handleRemove"
    >
    </image-panel>
  </div>
  <div v-if="pattern === 'onlyCard'">
    <image-card
      :key="loadKey"
      :info="info"
      :view-type="showEdit ? 'edit' : 'view'"
      :show-edit="showEdit"
      @edit="handleEdit"
      @remove="handleRemove"
    >
    </image-card>
  </div>
</template>

<script lang="ts" setup>
import _ from 'lodash';
import { computed, ref } from 'vue';
import type { PropType } from 'vue';
import { ElMessage } from 'element-plus';
import { uuid } from '@utils';
import ImageView from './ImageView.vue';
import ImagePanel from './ImagePanel.vue';
import ImageCard from './ImageCard.vue';
import type { StyleType, ViewType } from './ImageView.vue';

type Pattern = 'panel' | 'card' | 'change' | 'onlyPanel' | 'onlyCard';

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
  showDefault: {
    type: Boolean,
    default: false,
  },
  showEdit: {
    type: Boolean,
    default: false,
  },
});

const userOnly = computed(() => {
  return ['onlyPanel', 'onlyCard'].includes(props.pattern);
});

const list = ref<IImage[]>([
  {
    url: 'https://www.baidu.com/img/flexible/logo/pc/index.png',
    title: '百度logo',
  },
]);

const info = ref<IImage>(list.value[0]);

const dialogVisible = ref(false);

const form = ref<IImage>({
  url: '',
  title: '',
});

const editIndex = ref();

const handleEdit = (info: IImage) => {
  if (userOnly.value) {
    ElMessage('点击了编辑');
    return;
  }
  form.value = _.cloneDeep(info);
  editIndex.value = list.value.indexOf(info);
  dialogVisible.value = true;
};

const handleRemove = () => {
  ElMessage('点击了删除');
};

const handleSubmit = () => {
  list.value[editIndex.value] = _.cloneDeep(form.value);
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
