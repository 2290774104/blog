import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@utils': fileURLToPath(
        new URL('./src/.vuepress/utils/index', import.meta.url)
      ),
      '@icons': fileURLToPath(
        new URL('./src/.vuepress/components/icons/index', import.meta.url)
      ),
    },
  },
});
