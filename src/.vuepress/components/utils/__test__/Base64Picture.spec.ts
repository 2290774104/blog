import { mount } from '@vue/test-utils';
import { ElInput } from 'element-plus';
import { afterAll, afterEach, beforeAll, describe, expect, test, vi } from 'vitest';

import base64 from './file/img';
import Base64Picture from '../Base64Picture.vue';

describe('Base64Picture', () => {
  test('挂载组件', () => {
    expect(Base64Picture).toBeTruthy();
    const wrapper = mount(Base64Picture);
    expect(wrapper.get('.picture-input').text()).toBe('base64输入 粘贴清空');
    expect(wrapper.get('.picture-preview').text()).toBe('图片预览 下载');
  });
  test('数据测试', async () => {
    const wrapper = mount(Base64Picture);
    await wrapper.getComponent(ElInput).setValue(base64);
    expect(wrapper.vm.url).toBe(base64);
  });
  test('事件测试', async () => {
    const wrapper = mount(Base64Picture);
    // vitest 测试环境中没有实现剪切板api
    // 这里通过 mock 模拟剪切板
    (navigator.clipboard as any) = {
      readText: () => new Promise((resolve) => resolve(base64)),
    };
    URL.createObjectURL = vi.fn();
    await wrapper.get('.paste-button').trigger('click');
    expect(wrapper.vm.url).toBe(base64);
    await wrapper.get('.download-button').trigger('click');
  });
});
