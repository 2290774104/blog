import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

import ClickButton from '../ClickButton.vue';

describe('ClickButton', () => {
  test('挂载组件', async () => {
    expect(ClickButton).toBeTruthy();
    const wrapper = mount(ClickButton);
    expect(wrapper.get('.el-button').text()).toBe('click');
  });
  test('点击按钮', async () => {
    const wrapper = mount(ClickButton);
    wrapper.get('.el-button').trigger('click');
  });
  test('快照测试', async () => {
    const wrapper = mount(ClickButton);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
