---
title: image-view
date: 2024-08-23 15:41:30
order: 3
category:
  - 前端
  - 组件文档
  - 牛咔平台
tag:
  - Vue
  - vue3
  - components
---

# image-view

牛咔视频平台图片预览插件

## 特性

1. 使用 v-model 绑定图片列表
2. 绑定 v-model 即可渲染组件
3. 内置面板模式和卡片模式，传入 type 可以切换模式
4. 内置组件可单独使用，自行引入 ImageCard，ImagePanel 组件
5. 基于 vue2 版本封装，强依赖于 element-ui

## 引入

::: tabs

@tab httpVueLoader

牛咔项目使用 `httpVueLoader` 加载项目，通过路径加载组件

```js
new Vue({
  components: {
    ImageView: 'url:/static/vue/components/src/ImageView/ImageView.vue',
  },
});
```

@tab import

常规语法使用 `import` 导入组件

```js
import ImageView from '/static/vue/components/src/ImageView/ImageView.vue';

new Vue({
  components: {
    ImageView,
  },
});
```

:::

::: warning 注意事项
本文使用的图片预览是 `element` 封装的`image-viewer` 组件，牛咔项目中因为组件引用问题无法使用，目前以`dialog`组件替代
:::

## 基础用法

使用 `v-model` 绑定需要展示的图片列表，即可展示组件

::: demo
<template #component>
<image-view-basic-usage></image-view-basic-usage>
</template>

```vue
<template>
  <div>
    <image-view v-model="list" type="card" @edit="handleEdit"></image-view>
    <el-dialog :visible.sync="dialogVisible" title="编辑图片" width="500">
      <el-form :model="form" label-width="auto">
        <el-form-item label="图片地址：">
          <el-input v-model="form.url" />
        </el-form-item>
        <el-form-item label="图标标题：">
          <el-input v-model="form.title" />
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
      list: [
        {
          url: 'https://www.baidu.com/img/flexible/logo/pc/index.png',
          title: '百度logo',
        },
      ],
      dialogVisible: false,
      form: {
        url: '',
        title: '',
      },
      editIndex: '',
    };
  },
  methods: {
    handleEdit(info) {
      this.form = _.cloneDeep(info);
      this.editIndex = this.list.indexOf(info);
      this.dialogVisible = true;
    },
    handleSubmit() {
      this.list[this.editIndex] = _.cloneDeep(this.form);
      this.dialogVisible = false;
    },
  },
};
</script>
```

:::

## 卡片风格

只需要在 `image-view` 元素中设置 `type` 属性为 `card` 即可

::: demo
<template #component>
<image-view-basic-usage pattern="card"></image-view-basic-usage>
</template>

```vue
<template>
  <div>
    <image-view v-model="list" @edit="handleEdit"></image-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          url: 'https://www.baidu.com/img/flexible/logo/pc/index.png',
        },
      ],
    };
  },
};
</script>
```

:::

## 尾部插槽

可以在组件中后置一个元素，通常是按钮或上传控件

可通过 `slot` 来指定在组件中分发的后置内容

::: demo
<template #component>
<image-view-basic-usage pattern="change" viewType="view"></image-view-basic-usage>
</template>

```vue
<template>
  <div>
    <image-view v-model="list" :type="type" viewType="view">
      <template slot="append">
        <el-button @click="handleChange">切换风格</el-button>
      </template>
    </image-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          url: 'https://www.baidu.com/img/flexible/logo/pc/index.png',
        },
      ],
      type: 'panel',
    };
  },
  methods: {
    handleChange() {
      if (this.type === 'panel') {
        this.type = 'card';
      } else {
        this.type = 'panel';
      }
    },
  },
};
</script>
```

:::

## 内置组件

组件内使用到两个组件，panel 风格的 `image-panel` 和 card 风格的 `image-card`，这两个组件可单独引入项目使用

::: tabs

@tab httpVueLoader

牛咔项目使用 `httpVueLoader` 加载项目，通过路径加载组件

```js
new Vue({
  components: {
    ImagePanel: 'url:/static/vue/components/src/ImageView/ImagePanel.vue',
    ImageCard: 'url:/static/vue/components/src/ImageView/ImageCard.vue',
  },
});
```

@tab import

常规语法使用 `import` 导入组件

```js
import ImagePanel from '/static/vue/components/src/ImageView/ImagePanel.vue';
import ImageCard from '/static/vue/components/src/ImageView/ImageCard.vue';

new Vue({
  components: {
    ImagePanel,
    ImageCard,
  },
});
```

:::

## ImageView Attributes

| 属性名          | 说明                       | 类型                                                       | 默认值 |
| --------------- | -------------------------- | ---------------------------------------------------------- | ------ |
| value / v-model | 绑定值                     | array                                                      | —      |
| type            | 组件风格                   | enum <tool-tip content="'panel' &#124; 'card'"></tool-tip> | panel  |
| view-type       | 查看类型                   | enum <tool-tip content="'edit' &#124; 'view'"></tool-tip>  | edit   |
| url-key         | value 中代表图片地址的字段 | string                                                     | url    |
| title-key       | panel 风格中标题的字段     | string                                                     | title  |

## ImageView Events

| 事件名 | 说明                 | 类型                                                      |
| ------ | -------------------- | --------------------------------------------------------- |
| edit   | 点击组件中的编辑按钮 | `Function` <tool-tip content="(info) => void"></tool-tip> |
