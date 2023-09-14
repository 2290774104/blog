---
title: webpack
date: 2022-03-02 14:53:45
order: 3
category:
  - 前端
  - 学习笔记
tag:
  - webpack
---

# webpack

[webpack文档](https://www.webpackjs.com/concepts/)

## 开发环境和生成环境的定义

webpack对开发和生产环境的定义很清楚。

webpack在配置对象中提供了一个mode参数

mode: production/development 两个结果

production:代表生产环境，当配置为此结果时，webpack会对所有的js和html进行压缩处理，并且将构建结果输出到指定文件结构。用于发布到生产服务器

development：代表开发环境，当配置为此结果时，webpack要配合webpack-dev-server插件来使用，此时会启动本地服务器，用来调试和开发前端项目的代码，还需要配合devtools来实现编译代码和开发代码的映射来保证调试的准确性

## webpack 搭建开发和生成环境

### 1. 创建一个生产和开发环境分开的结构

首先创建一个目录，在控制台打开。在命令行中输入

``` sh
npm init -y
```

创建初始文件

然后安装基本插件：

1. webpack 核心包

``` sh
npm install webpack -D
```

2. webpack-cli 包

``` sh
npm install webpack-cli -D
```

然后我们在项目中创建三个文件

1. webpack.base.js (他代表webpack中公用部分的配置信息)
2. webpack.dev.js （他代表开发环境的配置文件部分，dev代表development）
3. webpack.prod.js （他代表生产环境的配置文件部分，prod代表production）

接下来创建两个文件夹并创建对应两个文件

1. public
   1. index.html
2. src
   1. index.js，这个文件内部可以随便用console输出点内容

### 2. 配置 entry 和 output

安装html-webpack-plugin

``` sh
npm install html-webpack-plugin -D
```

在webpack.base.js中输入以下代码

``` js
// webpack 相关配置文件是通过NodeJS环境启动并运行的
// 默认使用CommonJS模块语法
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '' // publicPath是生成的dist中的html文件中自动引入js和css文件时在最前面拼的一部分字符串
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'), // html模版文件位置
      filename: 'index.html', // 生成的html文件名，生成的html文件路径会整合base中配置的path生成到目标位置
      chunks: ['main'] // 生成的index.html中自动引入的组件，这里设置的是entry中定义的key
    })
  ]
};
```

package.json 中添加一条指令

``` json
{
  "scripts": {
    "base": "webpack --config webpack.base.js --color --progress"
  }
}
```

dev环境就是本地的开发环境，prod就是构建的生产环境

base相当于dev和prod中共同部分的内容我们单独抽取成一个根文件

### 3. 配置开发环境

安装 webpack-merge

``` sh
npm install webpack-merge -D
```

在webpack.dev.js中输入以下代码

``` js
const path = require('path');
// 引入webpack-merge用来合并配置到webpack.base.js中
const { merge } = require('webpack-merge');
const base = require('./webpack.base');

// merge用法用来将配置内容合并到webpack.base.js中
// 第一个参数是原始的webpack的配置json对象
// 第二个参数是我们要合并的单独的配置对象
// 他们最终会形成一个整体的大json
module.exports = merge(base, {
  // 定义环境为开发环境
  mode: 'development',
  devServer: {
    // 配置本地的静态资源文件夹，用来让这两个文件夹内部的文件可以通过访问http地址直接展示
    static: [
      path.resolve(__dirname, 'dist'), // 这里是构建目标路径
      path.resolve(__dirname, 'public') // 这里是public部分的内容
    ],
    host: 'localhost', // 本地服务启动后的ip地址
    port: 8080, // 本地服务启动的端口号
    open: true // 启动时自动打开默认浏览器
  }
});
```

然后我们需要在package.json中添加构建指令

``` json
{
  "scripts": {
    "serve": "webpack serve --config webpack.dev.js --color --progress --hot"
  }
}
```

配置完成，运行命令，可启动本地服务

``` sh
npm run serve
```

### 4. 配置生产环境

安装clean-webpack-plugin，确保构建时清空上传构建结果

```sh
npm install clean-webpack-plugin -D
```

在webpack.prod.js中输入以下代码

``` js
const { merge } = require('webpack-merge');
const base = require('./webpack.base');
// 清理dist文件夹的插件，用来在每次执行构建的时候清空上次构建的结果防止文件缓存
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: '[name]-[hash].js' // hash 防止项目更新后，走缓存，不更新
  },
  plugins: [new CleanWebpackPlugin()]
});
```

然后我们需要在package.json中添加构建指令

``` json
{
  "scripts": {
    "build": "webpack --config webpack.prod.js --color --progress"
  }
}
```

配置完成后执行

``` sh
npm run build
```

### 5. 配置babel

先安装 babel-loader

``` sh
npm install babel-loader -D
```

然后安装 babel 核心库

``` sh
npm install @babel/core @babel/preset-env -D
```

``` sh
npm install core-js -s
```

webpack.base.js中配置babel-loader

``` js
// webpack 相关配置文件是通过NodeJS环境启动并运行的
// 默认使用CommonJS模块语法
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '' // publicPath是生成的dist中的html文件中自动引入js和css文件时在最前面拼的一部分字符串
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 配置babel-loader用来编译和解析js
        use: { loader: 'babel-loader' }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'), // html模版文件位置
      filename: 'index.html', // 生成的html文件名，生成的html文件路径会整合base中配置的path生成到目标位置
      chunks: ['index'] // 生成的index.html中自动引入的组件，这里设置的是entry中定义的key
    })
  ]
};
```

这一步操作完毕之后我们还需要在项目中创建babel的核心配置文件

.babelrc文件

``` json
{
  "presets": [
    [
      "@babel/preset-env", //应用@babel/preset-env解析js
      {
        "useBuiltIns": "usage", //使用动态解析语法，根据兼容性转义
        "corejs": 3 //使用core-js3版本的js库来对低版本浏览器做兼容
      }
    ]
  ]
}
```

然后我们需要定义该项目可以兼容浏览器的范围

创建.browserslistrc文件

``` sh
> 0.25% 
last 2 versions
```

定义完成之后我们可以通过

``` sh
npx browserslist
```

来查看当前项目可兼容浏览器的列表

### 6. 样式的处理

安装样式处理器

``` sh
npm install style-loader css-loader postcss-loader sass-loader  sass -D
```

样式的处理和js不同，样式在开发和生产环境的要求是不同的，我们在开发环境中由于启动本地服务实时编写代码并且调试，所以不需要将css抽取到外部，而是整合到js中即可，发布到生产环境时需要将css抽取到外部，所以两个处理是有差异的

首先处理开发环境，在webpack.dev.js中使用loader解析样式文件

``` js
const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.base');

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    static: [
      path.resolve(__dirname, 'dist'),
      path.resolve(__dirname, 'public')
    ],
    host: 'localhost',
    port: 8080,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 编译css代码
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' }
        ]
      },
      {
        test: /\.scss$/, // 编译scss代码
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
});
```

然后我们需要在项目中定义postcss的配置文件，这里需要安装

postcss-preset-env，postcss,cssnano三个插件

``` sh
npm install postcss-preset-env postcss cssnano -D
```

然后我们定义postcss.config.js文件

``` js
module.exports = {
  plugins: {
    'postcss-preset-env': {}, // 处理兼容性
    cssnano: {} // 压缩样式
  }
};
```

运行项目样式正常加载且经过兼容性处理，则标识开发环境配置完成

接下来需要处理生产环境的样式处理。在生产环境中样式不光要做兼容性处理还需要将css部分的代码抽取到css文件中，这里就需要使用mini-css-extract-plugin来实现了

``` sh
npm install mini-css-extract-plugin -D
```

然后需要在webpack.prod.js中做如下改造

``` js
const { merge } = require('webpack-merge');
const base = require('./webpack.base');
// 清理dist文件夹的插件，用来在每次执行构建的时候清空上次构建的结果防止文件缓存
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 引入抽取css样式插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: '[name]-[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 抽取css样式文件
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          { loader: 'postcss-loader' }
        ]
      },
      {
        test: /\.scss$/, // 抽取css样式文件
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 配置样式抽取插件，生成的css文件名称为[name],[name]为entry中定义的key
    new MiniCssExtractPlugin({ filename: '[name].css' })
  ]
});
```

### 7. source-map

#### 什么是source-map

由于在webpack环境中进行代码开发时实际运行在浏览器中的代码是通过babel解析后的混淆过的并且处理过兼容性的js代码，这样我们在开发环境中调试开发时如果有代码报错，那么浏览器返回给我们的错误信息会与我们在src中编写的代码从行数到函数名称全部无法对应，这样就造成了调试困难。webpack提供的source-map就是相当于在构建后的代码和源代码中间做了一个简单的映射用来在出现语法错误时可以还原到源代码的结构提示错误的位置和内容。

#### 如何配置source-map

在生产环境中我们需要在webpack.prod.js中增加一个属性devtool

``` js
{
  devtool: 'source-map' // 独立配置源码映射
}
```

在开发环境中我们需要在webpack.dev.js中增加一个同样的devtool

``` js
{
  devtool :'inline-source-map' // 内联配置源码映射
}
```

它们两个的区别就是生产环境会对每一个js文件生成一个.map后缀的映射文件，而开发环境映射内容会直接构建在js代码中

### 8. 路径解析

由于生产和开发环境都需要通过import来引用依赖文件，所以我们直接将resolve配置到webpack.base.js中

``` js
// webpack.base.j追加如下代码
module.exports = {
  resolve: {
    // 配置免后缀的文件类型
    extensions: ['.js', '.jsx', '.vue', '.css', '.scss'],
    // 为全路径配置缩写@
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}
```

配置完成后可以通过 `@` 代表 `src` 目录

### 9. 文件处理

安装文件解析loader

``` sh
npm install file-loader -D
```

在webpack.base.js中增加file-loader用来解析文件

```js
{
  test:/\.(png|jpg|jpeg|gif)$/,
    use:[
      {loader:'file-loader'}
    ]
}
```

## 脚手架完善

清空src目录下的文件，然后创建main.js

### 1. 安装Vue依赖库

首先安装vue

``` sh
npm install vue -s
```

安装完成后修改public目录中的index.html

``` html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title></title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

然后再src目录下创建App.vue

``` vue
<template>
  <div id="app">
    {{ title }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'hello vue-cli'
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
```

在main.js中添加以下代码

``` js
import Vue from 'vue'
import App from './App.vue'
new Vue({
  render:(h) => h(App)
}).$mount('#app')
```

然后再安装vue相关的loader

``` sh
npm install vue-loader vue-template-compiler -D
```

然后改造webpack.base.js的配置

``` js
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
```

完成后即可启动项目

### 2. vue-router 安装

接下来要把项目的页面管理框架vue-router插入

``` sh
npm install vue-router -s
```

安装完成后在src目录下传机views文件夹，并创建Index.vue文件

``` vue
<template>
  <div>
    我是Index.vue
  </div>
</template>

<script>
export default {}
</script>
```

然后在src下创建router文件夹，并且在router文件夹内创建index.js文件

``` js
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/view/index.vue')
  }
];

export default new VueRouter({
  routes
});
```

之后将router加入到vue实例中

``` js
// main.js
import Vue from 'vue';
import App from '@/App';
import router from './router';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
```

并修改App.vue中的代码，即可完成配置

``` vue
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>
```

### 3. 个性化功能

可以通过npm/yarn等包管理工具引入不同的包，并在main.js中注册并使用

### 4. public 静态资源处理

我们在项目中有可能会引用public中的静态资源。

所以我们先启动项目

然后改造Index.vue，这里需要在对应的public文件夹中创建imgs文件夹并且放入一个名为bg1.png的图片然后在src中创建一个名为assets的文件夹放入bg.png图片

```vue
<template>
  <div>
    我是index.vue
    <router-link to="/test">跳转到test</router-link>
    <img style="display: block;" width="200" :src="src" alt="">
    <img width="200" height="200" src="imgs/bg1.png" alt="">
  </div>
</template>

<script>
  import img from '../assets/bg.png'
  export default{
    data(){
      return {
        src:img
      }
    }
  }
</script>

<style>
</style>

```

这里是两种引入静态资源的方式，直接在img上编写路径是通过public文件夹引入图片，通过import的方式是在src中引入图片，我们现在运行

``` sh
npm run build
```

然后我们打开dist中的index.html文件查看内容，发现只有一张图片展示

这是因为我们在public中使用的图片地址是在html标签上直接写的webpack并不知道我们依赖了这张图片所以没有将他输出到dist中，所以这里我们需要通过copy-webpack-plugin这个插件来实现将public的内容合并到dist中这样所有的静态资源在构建之后才能正常使用

```sh
npm i copy-webpack-plugin -D
```

然后改造webpack.prod.js

```js
const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require("compression-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path')
module.exports = merge(base,{
  mode:'production',
  devtool:'source-map',
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          MiniCssExtractPlugin.loader,//抽取css样式文件
          {loader:'css-loader'},
          {loader:'postcss-loader'},
        ]
      },
      {
        test:/\.scss$/,
        use:[
          MiniCssExtractPlugin.loader,//抽取css样式文件
          {loader:'css-loader'},
          {loader:'postcss-loader'},
          {loader:'sass-loader'}
        ]
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename:'[name].css'
    }),
    new CompressionPlugin({
      algorithm: "gzip",
      test: /\.js$|\.html$|\.css$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new CopyPlugin({
      patterns: [
        { 
          from: path.resolve(__dirname,'public'),
          to: path.resolve(__dirname,'dist')
        },
      ],
      options: {
        concurrency: 100,
      },
    })
  ]
})
```

然后运行

```sh
npm run build
```

我们查看结果，dist文件夹中集成了public中创建的imgs文件夹，这样静态资源就可以全部使用了。

以上就是我们模拟vue脚手架的常用功能。

### 5. 依赖图谱展示

依赖图谱展示需要使用的插件为`webpack-bundle-analyzer`

需要在webpack的配置文件中加入如下代码

```javascript
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
```

```javascript
plugins:[
  new BundleAnalyzerPlugin()
]
```

他的文档地址如下：https://www.npmjs.com/package/webpack-bundle-analyzer

使用后可以通过他来可视化追踪构建项目的依赖图谱和各个组件间的依赖关系
