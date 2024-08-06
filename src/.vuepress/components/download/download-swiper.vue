<template>
  <a @click="downloadFile">下载</a>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { downloadLocalFile } from '@utils'

const file = ref('swiper.zip')

const downloadFile = () => {
  downloadLocalFile(file.value)
}
</script>

<style lang="scss" scoped>
a {
  cursor: pointer;
}
</style>
