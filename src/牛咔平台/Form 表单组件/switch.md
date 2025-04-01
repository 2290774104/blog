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

:::

## 基础用法

绑定 `v-model` 记录开关的值，传入记录开关信息的 `info`

可以通过 `change` 事件监听开关值的变化

::: demo
<template #component>
  <niuka-switch-basic-usage></niuka-switch-basic-usage>
</template>

```vue
<template>
  <el-row>
    <el-col :span="12">
      <niuka-switch v-model="value" :info="info"></niuka-switch>
    </el-col>
    <el-col :span="12"> 当前开关的值：{{ value }} </el-col>
  </el-row>
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
};
</script>
```

:::

## 完整面板

通过组件 `showSort` 属性和 `info` 中设置序号字段，可以在左上角显示序号；
通过组件 `showRemark` 属性和 `remark` 插槽可以实现自定义的备注信息；
通过组件 `userEdit` 属性可以在备注信息后显示编辑图片，通过 `edit` 事件自行处理后续逻辑。

:::demo
<template #component>
<niuka-switch-complete-usage></niuka-switch-complete-usage>
</template>

```vue
<template>
  <div>
    <el-row>
      <el-col :span="12">
        <niuka-switch
          v-model="value"
          :info="info"
          show-sort
          show-remark
          user-edit
          @edit="handleEdit"
        >
          <template #remark>
            <el-tooltip
              class="item"
              effect="dark"
              :content="tooltipText"
              placement="top"
            >
              <div class="textEllipsis">{{ tooltipText }}</div>
            </el-tooltip>
          </template>
        </niuka-switch>
      </el-col>
      <el-col :span="12" class="result"> 当前开关的值：{{ value }} </el-col>
    </el-row>
    <el-dialog :visible.sync="dialogVisible" title="编辑开关" width="500">
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
      <template slot="footer">
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleSubmit"> 确定 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true,
      info: {
        label: '完整开关',
        props: 'value',
        sort: '1',
        remark: '',
      },
      form: {},
      dialogVisible: false,
    };
  },
  computed: {
    tooltipText() {
      return `备注：${info.value.remark || '暂无'}`;
    },
  },
  created() {
    this.form = _.cloneDeep(this.info);
  },
  methods: {
    handleEdit() {
      this.dialogVisible = true;
    },
    handleSubmit() {
      info.value.label = form.value.label;
      info.value.sort = form.value.sort;
      info.value.remark = form.value.remark;
      dialogVisible.value = false;
    },
  },
};
</script>
```

:::

## SwitchPlus Attributes

| 属性名          | 说明                     | 类型                     | 默认值  |
| --------------- | ------------------------ | ------------------------ | ------- |
| value / v-model | 绑定值                   | boolean/string/number    | —       |
| info            | 面板信息                 | [Info](#info-attributes) | 0       |
| label-key       | info 中代表 label 的字段 | string                   | label   |
| active-color    | 开关开启时的颜色         | string                   | #13ce66 |
| inactive-color  | 开关关闭时的颜色         | string                   | #cccccc |
| show-sort       | 是否显示左上序号         | boolean                  | false   |
| sort-key        | info 中代表序号的字段    | string                   | sort    |
| show-remark     | 是否显示备注区域         | boolean                  | false   |
| user-edit       | 是否显示编辑按钮         | boolean                  | false   |

### Info Attributes

| 属性名        | 说明         | 类型                  | 默认值 |
| ------------- | ------------ | --------------------- | ------ |
| activeValue   | 开关开启的值 | boolean/string/number | true   |
| inactiveValue | 开关关闭的值 | boolean/string/number | false  |
