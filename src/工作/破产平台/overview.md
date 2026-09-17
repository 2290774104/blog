---
title: 组件总览
date: 2023-04-20 11:34:49
order: 1
category:
  - 前端
  - 组件文档
  - 破产平台
tag:
  - Vue
  - components
---

# Overview 组件总览

## Form 表单组件

<overview-list :list="formList"></overview-list>

## Navigation 导航

<overview-list :list="navigationList"></overview-list>

## Wiki 知识库

<overview-list :list="wikiList"></overview-list>

<script>
export default {
	data() {
		return {
			formList: [
				{ name: 'Select 选择框', src: '工作/破产平台/Form 表单组件/select', icon: 'select' },
				{ name: 'FileModule 文件上传组件', src: '工作/破产平台/Form 表单组件/file-module', icon: 'file-module' },
			],
			navigationList: [
				{ name: 'Tabs 标签页', src: '工作/破产平台/Navigation 导航/tabs', icon: 'tabs' },
			],
			wikiList: [
				{ name: '破产小程序发布流程', src: '工作/破产平台/wiki/破产小程序发布流程', icon: 'wiki' },
				{ name: '人脸识别流程', src: '工作/破产平台/wiki/人脸识别流程', icon: 'wiki' },
			]
		}
	}
}
</script>
