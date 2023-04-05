import { defineClientConfig } from '@vuepress/client'
import BlogHome from './client/layouts/BlogHome/index.vue'
import Layout from './client/layouts/Layout.vue'
import NotFound from './client/layouts/NotFound.vue'

export default defineClientConfig({
  layouts: {
    BlogHome,
    Layout,
    NotFound,
  },
})