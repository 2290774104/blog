import { describe, expect, test } from 'vitest';
import { CopyCode, ViewCode } from '../index';
import { mount } from '@vue/test-utils';

describe('icons', () => {
  test('挂载组件', () => {
    expect(CopyCode).toBeTruthy();
    expect(ViewCode).toBeTruthy();
  });
  test('快照测试', () => {
    expect(mount(CopyCode).html()).toMatchSnapshot()
    expect(mount(ViewCode).html()).toMatchSnapshot()
  })
});
