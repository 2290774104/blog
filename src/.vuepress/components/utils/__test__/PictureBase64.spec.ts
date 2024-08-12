import { mount } from '@vue/test-utils';
import { ElUpload, ElInput } from 'element-plus';
import { describe, expect, test, vi } from 'vitest';

import base64 from './file/img';
import { dataURLtoFile } from '@utils';
import PictureBase64 from '../PictureBase64.vue';

describe('PictureBase64', () => {
  test('挂载组件', async () => {
    expect(PictureBase64).toBeTruthy();
    const wrapper = mount(PictureBase64);
    expect(wrapper.getComponent(ElUpload).text()).toBe(
      '拖动或点击上传图片可拖到上传图片'
    );
    expect(wrapper.get('.picture-preview').text()).toBe('图片预览');
    expect(wrapper.get('.picture-output').text()).toBe('base64输出 复制清空');
  });
  test('图片上传测试', async () => {
    const wrapper = mount(PictureBase64);
    await wrapper.vm.beforeUpload(dataURLtoFile(base64, 'image'));
    expect(wrapper.vm.url).toBe(base64);
  });
  test('数据测试', async () => {
    const wrapper = mount(PictureBase64);
    await wrapper.getComponent(ElInput).setValue(base64);
    expect(wrapper.vm.url).toBe(base64);
  });
  test('事件测试', async () => {
    const wrapper = mount(PictureBase64);
    // vitest 测试环境中没有实现剪切板api
    // 这里通过 mock 模拟剪切板
    (navigator.clipboard as any) = {
      writeText: vi.fn(),
    };
    vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValue();
    wrapper.get('.copy-button').trigger('click');
    wrapper.get('.reset-button').trigger('click');
  });
  test('快照测试', async () => {
    const wrapper = mount(PictureBase64);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
