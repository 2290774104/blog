---
title: vue3-setup语法糖中的props
date: 2024-07-01 09:23:58
order: 2
category:
  - 前端
  - 学习笔记
tag:
  - vue
  - vue3
---

# vue3-setup 语法糖中的 props

vue3 新增了 `setup` 语法糖，相应的 props，也会有相应的变化

## defineProps

在使用 `<script setup>` 语法糖的组件中，props 可以使用 `defineProps()` 宏来声明

::: demo
<template v-slot:component>
<define-props text2="这是父级传入的" />
</template>

```vue
<template>
  <div>这是text1：{{ text1 }}</div>
  <div>这是text2：{{ text2 }}</div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps({
  text1: {
    type: String,
    default: '这是文本1默认值',
  },
  text2: {
    type: String,
    required: true,
    validator(value: unknown, props) {
      return typeof value === 'string';
    },
  },
});
</script>
```
:::
