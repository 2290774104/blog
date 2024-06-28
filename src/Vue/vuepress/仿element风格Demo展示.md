---
title: 仿element风格Demo展示
date: 2024-06-28 11:14:23
order: 7
category:
  - 前端
tag:
  - Vue
  - VuePress
  - VuePress2
  - vuepress-theme-hope
---

# 仿 element 风格 Demo 展示

最近使用 `vuepress-theme-hope` 搭建博客时，发现之前使用的 demo 展示出现了问题，控制台报错并且不展示组件了，赶紧去官网看了下，也是同样的问题，这里决定自己封装下

![demo展示报错](data:image/png;base64,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)

## 安装 markdown 增强插件

先安装用于增强 markdown 的插件

```sh
pnpm install markdown-it-container markdown-it
```

## 创建插件

在根目录下创建的 plugins 存放本地插件

这里仿照 vuepress2 生态系统中的 markdown 增强，通过插件检索 `:::demo :::`，重新渲染成组件 `PreviewComponents`

```ts
// plugins/markdown/plugin-preview-demo/index.ts
import { Plugin } from 'vuepress';
import mdContainer from 'markdown-it-container';

export const previewDemoPlugin = (options = {}): Plugin => {
  options = Object.assign({});

  return (app) => {
    return {
      name: 'vuepress-plugin-preview-demo',
      extendsMarkdown: (md) => {
        md.use(mdContainer, 'demo', {
          validate(params) {
            return params.trim().match(/^demo\s*(.*)$/);
          },
          render(tokens, idx) {
            if (tokens[idx].nesting === 1) {
              return `
                <PreviewComponents>
              `;
            }
            return `</PreviewComponents>`;
          },
        });
      },
    };
  };
};
```

## 编写预览组件

预览插件主要分两块

- 组件渲染区域
- 代码展示区域

这里组件渲染通过具名插槽动态插入，代码通过默认插槽渲染代码块，这样可以省去代码块高亮处理

预览组件样式则参考 element-plus 文档样式

```vue
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
        <i class="el-icon" style="font-size: 16px" @click="handleCopy">
          <CopyCode />
        </i>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        :content="expandedTooltip"
        effect="dark"
        placement="bottom"
      >
        <i class="el-icon" style="font-size: 16px" @click="handleExpanded">
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
import { CaretTop } from '@element-plus/icons-vue';
import { CopyCode, ViewCode } from '@icons';
import { copyText } from '@utils';

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
  font-size: 14px;
  color: #909399;
  cursor: pointer;

  &:hover {
    color: #409eff;
  }

  span {
    margin-left: 10px;
  }
}
</style>
```

将组件注册

```ts
// src/.vuepress/client.ts
// 引入Demo预览组件，于本地插件中动态替换 ::: demo ::: 标签
import PreviewComponents from './components/PreviewComponents/index.vue';

export default defineClientConfig({
  enhance({ app }) {
    // ...
    app.component('PreviewComponents', PreviewComponents);
  },
```
