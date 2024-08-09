import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

import DownloadSwiper from '../DownloadSwiper.vue';

describe('DownloadSwiper', () => {
  test('挂载组件', () => {
    expect(DownloadSwiper).toBeTruthy();
    const wrapper = mount(DownloadSwiper);
    expect(wrapper.get('a').text()).toBe('下载');
  });
  test('事件测试', () => {
    const wrapper = mount(DownloadSwiper);
    wrapper.get('a').trigger('click')
  })
  test('快照测试', () => {
    const wrapper = mount(DownloadSwiper);
    expect(wrapper.html()).toMatchSnapshot()
  })
});
