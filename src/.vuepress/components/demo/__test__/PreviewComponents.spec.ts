import { describe, expect, test, vi } from 'vitest';

import PreviewComponents from '../PreviewComponents.vue';
import { mount } from '@vue/test-utils';

describe('PreviewComponents', () => {
  test('挂载组件', async () => {
    expect(PreviewComponents).toBeTruthy();
    const wrapper = mount(PreviewComponents);
    expect(wrapper.get('.example-source-wrapper').isVisible()).toBe(false);
    expect(wrapper.get('.example-float-control').isVisible()).toBe(false);
  });
  test('插槽测试', async () => {
    const wrapper = mount(PreviewComponents, {
      slots: {
        default: '默认插槽',
        component: '<div>component插槽</div>',
      },
    });
    expect(wrapper.get('.example-source-wrapper').text()).toBe('默认插槽');
    expect(wrapper.get('.example-showcase').html()).toContain(
      '<div>component插槽</div>'
    );
  });
  test('事件测试', async () => {
    const wrapper = mount(PreviewComponents, {
      slots: {
        default: '默认插槽',
        component: '<div>component插槽</div>',
      },
    });
    // vitest 测试环境中没有实现剪切板api
    // 这里通过 mock 模拟剪切板
    (navigator.clipboard as any) = {
      writeText: vi.fn(),
    };
    vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValue();
    wrapper.get('.copy-code').trigger('click');
    await wrapper.get('.view-code').trigger('click');
    expect(wrapper.get('.example-source-wrapper').isVisible()).toBe(true);
    expect(wrapper.get('.example-float-control').isVisible()).toBe(true);
    await wrapper.get('.example-float-control').trigger('click')
    expect(wrapper.get('.example-source-wrapper').isVisible()).toBe(false);
    expect(wrapper.get('.example-float-control').isVisible()).toBe(false);
  });
  test('快照测试', async() => {
    const wrapper = mount(PreviewComponents);
    expect(wrapper.html()).toMatchSnapshot()
    await wrapper.get('.view-code').trigger('click');
    expect(wrapper.html()).toMatchSnapshot()
  })
});
