<template>
  <el-row>
    <el-col :span="12">
      <switch-plus
        v-model="value"
        :info="info"
        show-sort
        show-remark
        user-edit
        @edit="handleEdit"
      >
        <template v-slot:remark>
          <el-tooltip
            class="item"
            effect="dark"
            :content="tooltipText"
            placement="top"
          >
            <div class="textEllipsis">{{ tooltipText }}</div>
          </el-tooltip>
        </template>
      </switch-plus>
    </el-col>
    <el-col :span="12" class="result"> 当前开关的值：{{ value }} </el-col>
  </el-row>
  <el-dialog v-model="dialogVisible" title="编辑开关" width="500">
    <el-form :model="form" label-width="auto">
      <el-form-item label="开关label：">
        <el-input v-model="form.label" />
      </el-form-item>
      <el-form-item label="序号：">
        <el-input v-model="form.sort" />
      </el-form-item>
      <el-form-item label="开关备注：">
        <el-input v-model="form.remark" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit"> 确定 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import _ from 'lodash';
import { computed, ref } from 'vue';
import SwitchPlus from './SwitchPlus.vue';

const value = ref(true);

const info = ref({
  label: '完整开关',
  props: 'value',
  sort: '1',
  remark: '',
});

const form = ref(_.cloneDeep(info.value));

const tooltipText = computed(() => {
  return `备注：${info.value.remark || '暂无'}`;
});

const dialogVisible = ref(false);

const handleEdit = () => {
  dialogVisible.value = true;
};

const handleSubmit = () => {
  info.value.label = form.value.label;
  info.value.sort = form.value.sort;
  info.value.remark = form.value.remark;
  dialogVisible.value = false;
};
</script>

<style lang="scss" scoped>
.result {
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.textEllipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
