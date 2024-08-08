import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      coverage: {
        provider: 'istanbul',
        reportsDirectory: './coverage',
        enabled: true,
      },
      testTransformMode: {
        web: ['*.{ts,tsx}'],
      },
      include: [
        ...configDefaults.include,
        './src/.vuepress/components/*.{test,spec}.?(c|m)[jt]s?(x)',
      ],
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./src/.vuepress/', import.meta.url)),
    },
  })
);
