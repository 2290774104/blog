<template>
  <el-row :gutter="20">
    <el-col
      v-for="(item, index) in list"
      :key="index"
      :lg="8"
      :md="12"
      :sm="24"
    >
      <RouteLink :to="`/${item.src}`">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>{{ item.name }}</span>
          </div>
          <div class="content">
            <svg-icon :icon="item.src"></svg-icon>
          </div>
        </el-card>
      </RouteLink>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { PropType, toRefs } from 'vue';

interface Item {
  name: string;
  src: string;
  icon: string;
}

const props = defineProps({
  list: {
    type: Array as PropType<Item[]>,
    required: true,
  },
});

const { list } = toRefs(props);
</script>

<style lang="scss" scoped>
.el-card {
  cursor: pointer;
  margin: 10px 0;

  ::v-deep(.el-card__body) {
    background-color: #f5f7fa;
  }
}
</style>
