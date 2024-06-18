import{_ as e,o as n,c as s,d as a}from"./app-ce950eb2.js";const i={},d=a(`<h1 id="nestjs-安装" tabindex="-1"><a class="header-anchor" href="#nestjs-安装" aria-hidden="true">#</a> nestjs 安装</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>Nest 是一个用于构建高效，可扩展的 Node.js 服务器端应用程序的框架。它使用渐进式 JavaScript，内置并完全支持 TypeScript</p><h2 id="安装脚手架" tabindex="-1"><a class="header-anchor" href="#安装脚手架" aria-hidden="true">#</a> 安装脚手架</h2><p>通过 npm 指令全局安装脚手架工具<code>@nestjs/cli</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-g</span> @nestjs/cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2><p><code>project-name</code> 为创建项目的名称</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nest new project-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="nestjs-项目结构" tabindex="-1"><a class="header-anchor" href="#nestjs-项目结构" aria-hidden="true">#</a> nestjs 项目结构</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── src
│   ├── app.controller.spec.ts 基本控制器的单元测试
│   ├── app.controller.ts 基本控制器
│   ├── app.module.ts 应用程序的根模块
│   ├── app.service.ts 基本服务
│   └── main.ts 应用程序入口文件
│
├── test 存放测试文件
├── .eslintrc.js ESLint配置文件
├── .gitignore git追踪忽略文件
├── .prettierrc prettier配置文件
├── nest-cli.json nest项目配置文件
├── package.json 记录项目信息安装依赖版本信息
├── pnpm-lock.yaml 记录锁定安装依赖版本信息
├── README.md 项目说明文件
├── tsconfig.build.json ts语法构建时配置文件
└── tsconfig.json ts语法编译器配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行应用程序" tabindex="-1"><a class="header-anchor" href="#运行应用程序" aria-hidden="true">#</a> 运行应用程序</h2><p>安装过程完成后，可以在命令行工具中运行以下命令，以启动应用程序：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> run start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要监听文件中的更改，可以运行以下命令来启动应用程序：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> run start:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,16),r=[d];function l(c,t){return n(),s("div",null,r)}const u=e(i,[["render",l],["__file","nestjs安装.html.vue"]]);export{u as default};
