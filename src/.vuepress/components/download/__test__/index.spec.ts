import { createApp } from 'vue';
import { describe, expect, test } from 'vitest';

import Download from '../index';

describe('download', () => {
  test('组件使用', async () => {
    const app = createApp({});
    app.use(Download);
  });
  test('快照测试', () => {
    expect(Download).toMatchSnapshot();
  });
});
