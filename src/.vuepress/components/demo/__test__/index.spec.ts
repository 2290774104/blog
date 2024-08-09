import { createApp } from 'vue';
import { describe, expect, test } from 'vitest';

import Demo from '../index';

describe('demo', () => {
  test('组件使用', async () => {
    const app = createApp({});
    app.use(Demo);
  });
  test('快照测试', () => {
    expect(Demo).toMatchSnapshot();
  });
});
