---
title: Switch 开关
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

# niuka-switch

牛咔视频平台带面板的开发组件

## 特性

1. 使用 v-model 绑定选中标签的值
2. 传入 info 即可渲染组件
3. 可以通过 v-for 批量渲染，支持 sort 序号显示
4. 支持 slot 显示备注信息
5. 基于 vue2 版本封装，强依赖于 element-ui
6. 可在非 TS 环境下正常使用，但需自行构建 jsx 环境([参考 babel-plugin-transform-vue-jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx))。

## 基础用法

绑定 `v-model` 记录开关的值，传入记录开关信息的 `info`

可以通过 `change` 事件监听开关值的变化

::: demo
<template #component>
<niuka-switch-base></niuka-switch-base>
</template>

```vue
<template>
  <div>
    <niuka-switch v-model="value" :info="info" @change="handleChange">
    </niuka-switch>
    当前开关的值：{{ value }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '2',
      info: {
        label: '开关label',
        activeValue: '1',
        inactiveValue: '2',
      },
    };
  },
  methods: {
    handleChange(value) {
      this.$message.info(`当前开关的值是：${value}`);
    },
  },
};
</script>
```

:::

## 备注插槽

通过组件 `showRemark` 属性和 `remark` 插槽可以实现自定义的备注信息

通过组件 `userEdit` 属性可以在备注信息后显示编辑图片，通过 `edit` 事件自行处理后续逻辑

:::demo
<template #component>
<niuka-switch-remark></niuka-switch-remark>
</template>

```vue
<template>
  <div>
    <niuka-switch
      v-model="value"
      :info="info"
      showRemark
      userEdit
      @edit="handleEdit"
    >
      <template slot="remark"> 这是 remark 插槽中的值 </template>
    </niuka-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '2',
      info: {
        label: '开关label',
        activeValue: '1',
        inactiveValue: '2',
      },
    };
  },
  methods: {
    handleEdit() {
      this.$message.info('点击了开关中的编辑按钮');
    },
  },
};
</script>
```

:::

## NiukaSwitch Attributes

| 属性名          | 说明                       | 类型                            | 默认值  |
| --------------- | -------------------------- | ------------------------------- | ------- |
| value / v-model | 绑定值                     | `boolean` / `string` / `number` | —       |
| info            | 开关信息                   | [Info](#info-attributes)        | —       |
| label-key       | info 中代表 `label` 的字段 | `string`                        | label   |
| active-color    | 开关开启时的颜色           | `string`                        | #13ce66 |
| inactive-color  | 开关关闭时的颜色           | `string`                        | #cccccc |
| show-sort       | 是否显示左上序号           | `boolean`                       | false   |
| sort-key        | info 中代表序号的字段      | `string`                        | sort    |
| show-remark     | 是否显示备注区域           | `boolean`                       | false   |
| user-edit       | 是否显示编辑按钮           | `boolean`                       | false   |
| disabled        | 是否禁用开关               | `boolean`                       | false   |

## NiukaSwitch Events

| 事件名 | 说明                 | 类型                                                                        |
| ------ | -------------------- | --------------------------------------------------------------------------- |
| change | 开关状态发生变化     | `Function` <Tooltip content="(val: boolean \| string \| number) => void" /> |
| edit   | 点击编辑图标时的回调 | `Function` <Tooltip content="(info: Info) => void" />                       |

## NiukaSwitch Slots

| 名称   | 说明                         |
| ------ | ---------------------------- |
| remark | 用于添加显示在备注区域的元素 |

### Info Attributes

| 属性名        | 说明         | 类型                            | 默认值 |
| ------------- | ------------ | ------------------------------- | ------ |
| activeValue   | 开关开启的值 | `boolean` / `string` / `number` | true   |
| inactiveValue | 开关关闭的值 | `boolean` / `string` / `number` | false  |
