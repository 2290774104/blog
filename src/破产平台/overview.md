---
title: 破产平台组件库
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

<script>
export default {
	data() {
		return {
			formList: [
				{ name: 'Select 选择框', src: '破产平台/Form 表单组件/select', icon: 'select' },
				{ name: 'FileModule 文件上传组件', src: '破产平台/Form 表单组件/file-module', icon: 'file-module' },
			],
			navigationList: [
				{ name: 'Tabs 标签页', src: '破产平台/Navigation 导航/tabs', icon: 'tabs' },
			]
		}
	}
}
</script>
