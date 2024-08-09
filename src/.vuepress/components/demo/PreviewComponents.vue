<template>
  <div class="example">
    <div class="example-showcase">
      <slot name="component"></slot>
    </div>
    <el-divider />
    <div class="op-btns">
      <el-tooltip
        class="box-item"
        content="复制代码"
        effect="dark"
        placement="bottom"
      >
        <i
          class="el-icon copy-code"
          style="font-size: 16px"
          @click="handleCopy"
        >
          <CopyCode />
        </i>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        :content="expandedTooltip"
        effect="dark"
        placement="bottom"
      >
        <i
          class="el-icon view-code"
          style="font-size: 16px"
          @click="handleExpanded"
        >
          <ViewCode />
        </i>
      </el-tooltip>
    </div>
    <el-collapse-transition>
      <div class="example-source-wrapper" v-show="isExpanded" ref="code">
        <slot />
      </div>
    </el-collapse-transition>
    <transition name="el-fade-in">
      <div
        class="example-float-control"
        v-show="isExpanded"
        @click="handleHidden"
      >
        <el-icon><CaretTop /></el-icon>
        <span>隐藏源代码</span>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import {
  ElDivider,
  ElTooltip,
  ElCollapseTransition,
  ElIcon,
} from 'element-plus';
import { copyText } from '@utils';
import { CopyCode, ViewCode } from '@icons';
import { CaretTop } from '@element-plus/icons-vue';

const isExpanded = ref(false);

const expandedTooltip = computed(() => {
  return isExpanded.value ? '隐藏源代码' : '查看源代码';
});

const code = ref<any>(null);

const handleCopy = () => {
  const text = (code.value as HTMLElement).innerText;
  copyText(text);
};

const handleExpanded = () => {
  isExpanded.value = !isExpanded.value;
};

const handleHidden = () => {
  isExpanded.value = false;
};
</script>

<style lang="scss" scoped>
.example {
  border: 1px solid var(--border-color);
  border-radius: 4px;

  .el-divider {
    margin: 0;
  }

  .op-btns {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 24px;
    padding: 8px;

    .el-icon {
      margin: 0 8px;
      cursor: pointer;
      color: var(--color);

      &:hover {
        color: var(--el-text-color-primary);
      }
    }
  }
}

.example-showcase {
  padding: 24px;
  background: var(--bg-color);
}

.example-source-wrapper {
  margin: -15px 0;
  min-height: 30px;
}

.example-float-control {
  position: sticky;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--border-color);
  height: 44px;
  background-color: var(--bg-color);
  font-size: 14px;
  color: var(--el-text-color-secondary);
  cursor: pointer;

  &:hover {
    color: var(--el-color-primary);
  }

  span {
    margin-left: 10px;
  }
}
</style>
