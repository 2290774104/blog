<template>
  <div class="blog-home">
    <navbar />
    <Content class="page" />
  </div>
</template>
<script lang="ts">
export default {
  name: 'BlogHome'
}
</script>
<script lang="ts" setup>
import Navbar from '../../components/Navbar/index.vue'
</script>

<style lang="scss">
.page {
  padding-left: 0;
}
</style>
