<template>
  <div>
    百度地图
    <div class="mapp" ref="baiduRef"></div>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance, ref } from 'vue';
const cns = getCurrentInstance();
const { $get } = cns?.appContext.config.globalProperties.http;

const baiduRef = ref();
const map = ref();
const point = ref();
const marker = ref();

const config = {
  v: '3.0',
  ak: 'bZD4KRYrtXI4FliEeHeh0hdtNHvyRMm0',
  callback: 'initMap',
};

const getBMap = () => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `http://api.map.baidu.com/api?${new URLSearchParams(
    config
  ).toString()}`;
  console.log(123);
  document.getElementsByTagName('head')[0].appendChild(script);
  (window as any).initMap = initMap
};

getBMap();

function initMap(lng = 116.405725, lat = 39.935362) {
  const BMap = (window as any).BMap;
  map.value = new BMap.Map(baiduRef.value); //新建一个map地图实例
  point.value = new BMap.Point(lng, lat); //创建点
  //   console.log(point.value, 858585);
  marker.value = new BMap.Marker(point.value); //做标记

  map.value.centerAndZoom(point.value, 15);
  map.value.enableScrollWheelZoom(true); //滚轮缩放
  map.value.addOverlay(marker.value); //在地图上显示标记点
  //   样式id，设置样式的自定义
  map.value.setMapStyleV2({
    styleId: '1fb853a740649182c004c7f05e3f1ac7',
  });

  //   点击标注监听事件
  marker.value.addEventListener('click', function (e) {
    alert('您点击了标注');
    console.log(e, 888888888);
  });
}
</script>

<style lang="scss" scoped>
.mapp {
  height: 500px;
}
</style>
