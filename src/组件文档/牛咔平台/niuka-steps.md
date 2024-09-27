---
title: niuka-steps
date: 2024-08-19 16:59:50
order: 1
category:
  - 前端
  - 组件文档
  - 牛咔平台
tag:
  - Vue
  - vue3
  - components
---

# niuka-steps

牛咔视频平台步骤条组件

## 特性

1. 使用 active 绑定当前步骤
2. 传入 steps 即可渲染组件
3. 支持配置 icon 图标
4. 基于 vue2 版本封装

## 引入

::: tabs

@tab httpVueLoader

牛咔项目使用 `httpVueLoader` 加载项目，通过路径加载组件

```js
new Vue({
  components: {
    StepsPlus: 'url:/static/vue/components/src/Steps/StepsPlus.vue',
  },
});
```

@tab import

常规语法使用 `import` 导入组件

```js
import StepsPlus from '/static/vue/components/src/Steps/StepsPlus.vue';

new Vue({
  components: {
    StepsPlus,
  },
});
```

:::

## 基础用法

设置 `active` 属性，接受一个 `Number`，表明步骤的 index，从 0 开始。

::: demo
<template v-slot:component>
<niuka-steps-basic-usage operation></niuka-steps-basic-usage>
</template>

```vue
<template>
  <div>
    <niuka-steps :active="active" :steps="steps" :space="90"></niuka-steps>
    <div class="mt20">
      <el-button type="primary" v-if="active < 2" @click="active++">
        下一步
      </el-button>
      <el-button type="primary" plain v-if="active > 0" @click="active--">
        上一步
      </el-button>
      当前的步骤是：{{ steps[active].title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      steps: [
        { title: '设置基本信息' },
        { title: '设置直播功能' },
        { title: '设置直播详情' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.mt20 {
  margin-top: 20px;
}
</style>
```

:::

## 配置 icon

可以在 `steps` 中配置 `icon` 字段来切换步骤中的图标

::: demo
<template v-slot:component>
<niuka-steps-basic-usage icon="edit" :space="152"></niuka-steps-basic-usage>
</template>

```vue
<template>
  <div>
    <niuka-steps :active="active" :steps="steps"></niuka-steps>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      steps: [
        { title: '步骤1', icon: 'edit' },
        { title: '步骤2', icon: 'edit' },
        { title: '步骤3', icon: 'edit' },
      ],
    };
  },
};
</script>
```

:::

## 步骤间距

每个 `step` 的间距，不填写默认 `152px`

::: demo
<template v-slot:component>
<niuka-steps-basic-usage :space="100"></niuka-steps-basic-usage>
</template>

```vue
<template>
  <div>
    <niuka-steps :active="active" :steps="steps" :space="100"></niuka-steps>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      steps: [{ title: '步骤1' }, { title: '步骤2' }, { title: '步骤3' }],
    };
  },
};
</script>
```

:::

## StepsPlus Attributes

| 属性名 | 说明                             | 类型                       | 默认值 |
| ------ | -------------------------------- | -------------------------- | ------ |
| space  | 每个 step 的间距，不填写默认 152 | number                     | —      |
| active | 设置当前激活步骤                 | number                     | 0      |
| steps  | 步骤配置                         | [Steps](#steps-attributes) | —      |

### Steps Attributes

| 属性名 | 说明       | 类型                                                                        | 默认值 |
| ------ | ---------- | --------------------------------------------------------------------------- | ------ |
| title  | 步骤的标题 | string                                                                      | —      |
| icon   | 步骤的图标 | enum <tool-tip content="'filter' &#124; 'edit' &#124;  setting"></tool-tip> | —      |
