<template>
  <div>
    <niuka-switch
      v-model="value"
      :info="info"
      showRemark
      userEdit
      @edit="handleEdit"
    >
      <template #remark=""> 这是 remark 插槽中的值 </template>
    </niuka-switch>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import NiukaSwitch from './index.vue';
import { ElMessage } from 'element-plus';

const value = ref('2');

const info = ref({
  label: '开关label',
  props: 'value',
  activeValue: '1',
  inactiveValue: '2',
});

const handleEdit = () => {
  ElMessage.info('点击了开关中的编辑按钮')
}
</script>

<style lang="scss" scoped></style>
