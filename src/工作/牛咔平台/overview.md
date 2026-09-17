---
title: 组件总览
date: 2025-02-06 17:33:31
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

# Overview 组件总览

## Form 表单组件

<overview-list :list="formList"></overview-list>

## Navigation 导航

<overview-list :list="navigationList"></overview-list>

## Data 数据展示

<overview-list :list="dataList"></overview-list>

<script>
export default {
	data() {
		return {
			formList: [
				{ name: 'Switch 开关', src: '工作/牛咔平台/Form 表单组件/switch', icon: 'switch' },
			],
			navigationList: [
				{ name: 'Steps 步骤条', src: '工作/牛咔平台/Navigation 导航/steps', icon: 'steps' },
			],
			dataList: [
				{ name: 'Image 图片预览', src: '工作/牛咔平台/Data 数据展示/image', icon: 'image' },
			]
		}
	}
}
</script>
