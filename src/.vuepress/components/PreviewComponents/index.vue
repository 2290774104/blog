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
          class="el-icon op-btn el-tooltip__trigger el-tooltip__trigger"
          aria-label="复制代码"
          tabindex="0"
          role="button"
          data-v-5d9e4641=""
          style="font-size: 16px"
          @click="handleCopy"
        >
          <svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            width="1.2em"
            height="1.2em"
            data-v-5d9e4641=""
          >
            <path
              fill="currentColor"
              d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z"
            ></path>
          </svg>
        </i>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        :content="expandedTooltip"
        effect="dark"
        placement="bottom"
      >
        <i
          class="el-icon"
          data-v-5d9e4641=""
          style="font-size: 16px"
          @click="handleExpanded"
        >
          <svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            width="1.2em"
            height="1.2em"
            data-v-5d9e4641=""
          >
            <path
              fill="currentColor"
              d="m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414L23 12zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12z"
            ></path>
          </svg>
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
import { CaretTop } from '@element-plus/icons-vue'
import { copyText } from '../../utils'

const isExpanded = ref(false);

const expandedTooltip = computed(() => {
  return isExpanded.value ? '隐藏源代码' : '查看源代码';
});

const code = ref<any>(null);

const handleCopy = () => {
  const text = (code.value as HTMLElement).innerText
  copyText(text)
};

const handleExpanded = () => {
  isExpanded.value = !isExpanded.value;
};

const handleHidden = () => {
  isExpanded.value = false;
};

//
</script>

<style lang="scss" scoped>
.example {
  border: 1px solid #dcdfe6;
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
      color: #909399;
    }
  }
}

.example-showcase {
  padding: 24px;
  background: #fff;
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
  border-top: 1px solid #dcdcdc;
  height: 44px;
  background-color: #fff;
  color: #909399;
  cursor: pointer;

  &:hover {
    color: #409eff;
  }
}
</style>
