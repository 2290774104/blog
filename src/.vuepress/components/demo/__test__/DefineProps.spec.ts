import { describe, expect, test } from 'vitest';

import DefineProps from '../DefineProps.vue';
import { mount } from '@vue/test-utils';

describe('DefineProps', () => {
  test('挂载组件', async () => {
    expect(DefineProps).toBeTruthy();
  });
  test('props默认值测试', () => {
    const wrapper = mount(DefineProps, {
      props: {
        text2: 'text2',
      },
    });
    expect(wrapper.get('.text1').text()).toBe('这是text1：这是文本1默认值');
  });
  test('props传参测试', async () => {
    const wrapper = mount(DefineProps, {
      props: {
        text1: '传入的text1',
        text2: '传入的text2',
      },
    });
    expect(wrapper.get('.text1').text()).toBe('这是text1：传入的text1');
    expect(wrapper.get('.text2').text()).toBe('这是text2：传入的text2');
  });
  test('快照测试', async() => {
    const wrapper = mount(DefineProps, {
      props: {
        text1: '传入的text1',
        text2: '传入的text2',
      },
    });
    expect(wrapper.html()).toMatchSnapshot()
  })
});
