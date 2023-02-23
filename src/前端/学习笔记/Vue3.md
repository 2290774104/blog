---
title: Vue3
date: 2022-02-15 10:06:25
order: 5
category:
  - 前端
  - 学习笔记
tags:
  - vue
  - vue3
---

# Vue3

+ `Vue3` 支持 `Vue2` 的大多数特性
+ 更好支持了 `TypeScript`
+ 打包是排除多余代码，性能提升

## 新增特性

+ Composition API
+ setup
  + ref 和 reactive
  + computed 和 watch
  + 新的生命周期
  + provide 与 inject
+ 新组件
+ 其他 API 更新
  + 全局 API 修改
  + 将原本的全局 API 转移到应用对象
  + 模板语法变化

## 区别介绍

+ 源码采用 `monorepo` 方式进行管理，将模块拆分到 `package` 目录中
  + 模块可单独打包
  + 模块可以互相引用
+ `Vue3` 采用 `ts` 开发，增强类型管理。`Vue2` 则采用 `flow`
  + `ts` 是目前比较主流的类型检测方案，代码提示比较强
  + `flow` 推断不准确，并且目前不再更新
+ `Vue3` 的性能优化，支持 `tree-shaking` ，不使用就不会被打包
+ `Vue3` 劫持数据采用的是 `proxy` ，`Vue2` 劫持数据采用的是 `defineProperty`
  + `defineProperty` 有性能问题和缺陷
+ `Vue3` 中对模板编译进行了优化
+ `Vue3` 采用 `compositionApi` 进行组织功能，优化复用逻辑，相比 `optionApi` 类型推断更加方便
  + `mixin` 带来的数据来源不清晰，命名冲突等
+ 增加了 `Fragment` ，`Teleport` ，`Suspense` 组件

## Composition API

### setup

+ 新的option, 所有的组合API函数都在此使用, 只在初始化时执行一次
+ 函数如果返回对象, 对象中的属性或方法, 模板中可以直接使用

``` vue
<template>
  <div>
    <h2>{{ count }}</h2>
    <button @click="countUp">count++</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const count = ref(1);
    const countUp = () => {
      count.value = count.value + 1;
    };
    return {
      count,
      countUp,
    };
  },
};
</script>
```

+ setup 执行时机
  + 在 `beforeCreate` 之前执行(一次)，此时组件对象还没有创建
  + `this` 是 `undefined` ，不能通过 this 访问 data/computed/methods/props
+ setup 返回值
  + 一般都返回一个对象: 为模板提供数据, 也就是模板中可以直接使用此对象中的所有属性/方法
  + 返回对象中的属性会与data函数返回对象的属性合并成为组件对象的属性
  + 返回对象中的方法会与methods中的方法合并成功组件对象的方法
  + `如果有重名, setup优先`
+ setup 参数
  + setup(props, context) / setup(props, {attrs, slots, emit})
  + props: 包含props配置声明且传入了的所有属性的对象
  + attrs: 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs
  + slots: 包含所有传入的插槽内容的对象, 相当于 this.$slots
  + emit: 用来分发自定义事件的函数, 相当于 this.$emit

注：

1. methods中可以访问setup提供的属性和方法, 但在setup方法中不能访问data和methods
2. setup不能是一个async函数: 因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性数据

### ref

+ 定义一个数据的响应式
+ 一般用来定义一个基本类型的响应式数据

``` vue
<template>
  <div>
    <h2>{{ count }}</h2>
    <button @click="countUp">count++</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const count = ref(1);
    const countUp = () => {
      count.value = count.value + 1;
    };
    return {
      count,
      countUp,
    };
  },
};
</script>
```

### reactive

+ 定义多个数据的响应式
+ 接收一个普通对象然后转换为改对象的响应式代理器对象
+ 响应式转换是`深层的`，会影响对象内部所有嵌套的属性
+ 内部基于 ES6 的 `Proxy` 实现

``` vue
<template>
  <div>
    <div>姓名：{{ user.name }}</div>
    <div>年龄：{{ user.age }}</div>
    <button @click="ageUp">ageUp</button>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const user = reactive({
      name: "tang",
      age: 22,
    });

    const ageUp = () => {
      user.age += 1;
    };

    return {
      user,
      ageUp,
    };
  },
};
</script>
```

### ref 和 reactive 细节

+ 是 `Vue3` 的 `compositionAPI` 中最重要的响应式 API
+ ref 用来处理基础类型数据， reactive 用来处理对象(递归深度响应式)
+ 果用 `ref` 对象/数组, 内部会自动将对象/数组转换为 `reactive` 的代理对象
+ `ref` 内部: 通过给value属性添加 `getter/setter` 来实现对数据的劫持
+ `reactive` 内部: 通过使用 `Proxy` 来实现对对象内部所有数据的劫持, 并通过 `Reflect` 操作对象内部数据
+ `ref` 的数据操作: 在js中要 .`value` , 在模板中不需要(内部解析模板时会自动添加.value)

### 计算属性和监视

+ computed函数：与computed配置功能一致
+ watch函数：与watch配置功能一致
  + 监视指定的一个或多个响应式数据, 一旦数据变化, 就自动执行监视回调
  + 默认初始时不执行回调, 但可以通过配置 `immediate` 为true, 来指定初始时立即执行第一次
  + 通过配置 `deep` 为true, 来指定深度监视
+ watchEffect函数
  + 不用直接指定要监视的数据, 回调函数中使用的哪些响应式数据就监视哪些响应式数据
  + 默认初始时就会执行第一次, 从而可以收集需要监视的数据
  + 监视数据发生变化时回调

``` vue
<template>
  <h2>App</h2>
  fistName: <input v-model="user.firstName" /><br />
  lastName: <input v-model="user.lastName" /><br />
  fullName1: <input v-model="fullName1" /><br />
  fullName2: <input v-model="fullName2" /><br />
  fullName3: <input v-model="fullName3" /><br />
</template>

<script>
import { reactive, ref, computed, watch, watchEffect } from "vue";

export default {
  setup() {
    const user = reactive({
      firstName: "A",
      lastName: "B",
    });

    // 只有getter的计算属性
    const fullName1 = computed(() => {
      console.log("fullName1");
      return user.firstName + "-" + user.lastName;
    });

    // 有getter与setter的计算属性
    const fullName2 = computed({
      get() {
        console.log("fullName2 get");
        return user.firstName + "-" + user.lastName;
      },

      set(value) {
        console.log("fullName2 set");
        const names = value.split("-");
        user.firstName = names[0];
        user.lastName = names[1];
      },
    });

    const fullName3 = ref("");

    /* 
    watchEffect: 监视所有回调中使用的数据
    */
    watchEffect(() => {
      console.log('watchEffect')
      fullName3.value = user.firstName + '-' + user.lastName
    }) 

    /* 
    使用watch的2个特性:
      深度监视
      初始化立即执行
    */
    watch(
      user,
      () => {
        fullName3.value = user.firstName + "-" + user.lastName;
      },
      {
        immediate: true, // 是否初始化立即执行一次, 默认是false
        deep: true, // 是否是深度监视, 默认是false
      }
    );

    /* 
    watch一个数据
      默认在数据发生改变时执行回调
    */
    watch(fullName3, (value) => {
      console.log("watch");
      const names = value.split("-");
      user.firstName = names[0];
      user.lastName = names[1];
    });

    /* 
    watch多个数据: 
      使用数组来指定
      如果是ref对象, 直接指定
      如果是reactive对象中的属性,  必须通过函数来指定
    */
    watch([() => user.firstName, () => user.lastName, fullName3], (values) => {
      console.log("监视多个数据", values);
    });

    return {
      user,
      fullName1,
      fullName2,
      fullName3,
    };
  },
};
</script>
```

## Vue3 与 Vue2 的响应式

### Vue2 的响应式

+ 核心
  + 对象：通过 defineProperty 对对象已有属性值的读取和修改进行劫持（监视/拦截）
  + 数组：通过重写数组更新数组一系列更新元素的方法来实现元素修改的劫持

``` js
Object.defineProperty(data, 'count', {
  get() {},
  set() {}
})
```

+ 问题
  + 对象直接添加属性或者删除已有属性，界面不会自动刷新
  + 直接通过下标替换元素或者更新length，界面不会自动更新

### Vue3 的响应式

+ 核心
  + 通过 Proxy(代理) 拦截对data任意属性的任意操作，包括属性值的读写，属性添加，属性删除等
  + 通过 Reflect(反射) 动态对被代理对象的相应属性进行特定的操作

+ 文档地址
  + [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy 'Proxy 文档地址')
  + [Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect 'Reflect 文档地址')

``` js
const user = {
  name: 'tanghc',
  age: '22',
  work: {
    name: '前端',
    year: '2'
  }
};
// 把目标对象变为代理对象
const proxyUser = new Proxy(user, {
  // 获取目标对象的某个属性值
  get(target, prop) {
    console.log('get 方法调用');
    return Reflect.get(target, prop);
  },
  // 修改/添加目标对象的属性值
  set(target, prop, value) {
    console.log('set 方法调用');
    return Reflect.set(target, prop, value);
  },
  // 删除目标对象的属性值
  deleteProperty(target, prop) {
    console.log('delete 方法调用');
    return Reflect.deleteProperty(target, prop);
  }
});

// 通过代理对象获取目标对象上的某个属性值
console.log(proxyUser.name);
// 通过代理对象修改目标对象上的某个属性值
proxyUser.age = '23';
proxyUser.gender = '男';
console.log(user);
// 通过代理对象删除目标对象上的某个属性
delete proxyUser.gender;
console.log(user);
```

## Vue3 源码

### 1. Monorepo 介绍

`Monorepo` 是管理项目代码的一种方式，指在一个项目仓库中管理多个模块/包

+ 一个仓库可维护多个模块，不用到处找仓库
+ 方便版本管理和依赖管理，模块之间互相的引用，调用比较方便

::: warning
缺点：仓库体积会变大
:::

### 2. Vue3 项目结构

+ `reactivity`：响应式系统
+ `runtime-core`：运行时核心（可创建针对特定平台的运行时 - 自定义渲染器）
+ `runtime-dom`：浏览器运行时。包括 `DOM API`，属性，事件处理等
+ `runtime-test`：用于测试
+ `server-renderer`：用于服务器渲染
+ `compiler-core`：编译器核心
+ `compiler-dom`：针对浏览器编译模块
+ `compiler-ssr`：针对服务器渲染的编译模块
+ `compiler-sfc`：针对单文件的编译模块
+ `size-check`：用来测试代码体积
+ `template-explorer`：用于调试编译器输出的开发工具
+ `shared`：多个包之间共享的内容
+ `vue`：完整版本，包括运行时和编译器

### 3. 安装依赖

|            依赖             |                        |
| :-------------------------: | ---------------------- |
|         typescript          | 支持TypeScript         |
|           rollup            | 打包工具               |
|  rollup-plugin-typescript2  | rollup和ts的桥梁       |
| @rollup/plugin-node-resolve | 解析node第三方模块     |
|     @rollup/plugin-json     | 支持引入json           |
|            execa            | 开启子进程方便执行命令 |

``` sh
npm install typescript rollup rollup-plugin-typescript2 @rollup/plugin-node-resolve @rollup/plugin-json execa
```
