<template>
  <div class="switch-plus">
    <div class="switch-sort" v-if="showSort">
      {{ info[sortKey] }}
    </div>
    <div class="switch-info">
      {{ info[labelKey] }}
      <el-switch
        v-model="model_value"
        :style="switchStyle"
        :active-value="activeValue"
        :inactive-value="inactiveValue"
      />
    </div>
    <div class="switch-remark" v-if="showRemark">
      <div class="remark-slot">
        <slot name="remark"></slot>
      </div>
      <el-icon v-if="userEdit" @click="handleEdit"><EditPen /></el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { EditPen } from '@element-plus/icons-vue';

export interface IInfo {
  activeValue?: boolean | string | number;
  inactiveValue?: boolean | string | number;
  [key: string]: any;
}

const props = defineProps({
  modelValue: {
    type: [Boolean, String, Number],
    required: true,
  },
  info: {
    type: Object as () => IInfo,
    required: true,
  },
  labelKey: {
    type: String,
    default: 'label',
  },
  activeColor: {
    type: String,
    default: '#13ce66',
  },
  inactiveColor: {
    type: String,
    default: '#cccccc',
  },
  showSort: {
    type: Boolean,
    default: false,
  },
  sortKey: {
    type: String,
    default: 'sort',
  },
  showRemark: {
    type: Boolean,
    default: false,
  },
  userEdit: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue', 'edit']);

const model_value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

const activeValue = computed(() => {
  return Object.prototype.hasOwnProperty.call(props.info, 'activeValue')
    ? props.info.activeValue
    : true;
});

const inactiveValue = computed(() => {
  return Object.prototype.hasOwnProperty.call(props.info, 'inactiveValue')
    ? props.info.inactiveValue
    : false;
});

const switchStyle = computed(() => {
  return {
    '--el-switch-on-color': props.activeColor,
    '--el-switch-off-color': props.inactiveColor,
  };
});

const handleEdit = () => {
  emit('edit', props.info);
};
</script>

<style lang="scss" scoped>
.switch-plus {
  position: relative;
  box-sizing: border-box;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #d8dfeb;

  .switch-sort {
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    background: url('/assets/demo/niuka/SwitchPlus/switch-sort.png') no-repeat
      center/100%;
    font-size: 12px;
    color: #2293e6;
  }

  .switch-info {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 32px;
  }

  .switch-remark {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    height: 32px;
  }

  .remark-slot {
    width: 100%;
    color: #959ca6;
    font-size: 12px;
    overflow: hidden;
  }

  .el-icon {
    flex-shrink: 0;
    cursor: pointer;
  }
}
</style>
