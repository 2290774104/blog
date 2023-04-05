<template>
  <router-link
    v-if="renderRouterLink"
    :to="config.link"
    :class="['nav-link', { active: isActive }]"
  >
    <el-icon v-if="config.icon">
      <component :is="config.icon" />
    </el-icon>
    {{ config.text }}
  </router-link>
  <a
    v-else
    :href="config.link"
    :rel="anchorRel"
    :target="linkTarget"
    :aria-label="linkAriaLabel"
    class="nav-link"
  >
    <el-icon v-if="config.icon">
      <component :is="config.icon" />
    </el-icon>
    {{ config.text }}
  </a>
</template>

<script lang="ts">
export default {
  name: "AutoLink",
};
</script>
<script lang="ts" setup>
import { useSiteData } from "@vuepress/client";
import { computed, PropType, toRef } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { keys, startsWith } from "vuepress-shared/client";
import { type AutoLinkOptions } from "../../../shared/index.js";
import { isLinkHttp, isLinkMailto, isLinkTel } from "@vuepress/shared";

const props = defineProps({
  config: {
    type: Object as PropType<AutoLinkOptions>,
    required: true,
  },
  /**
   * @description Whether it's active only when exact match
   */
  exact: Boolean,

  /**
   * @description Whether to hide externalLinkIcon
   */
  noExternalLinkIcon: Boolean,
});

const route = useRoute();
const siteData = useSiteData();
const config = toRef(props, "config");

// 链接是否具有http协议
const hasHttpProtocol = computed(() => isLinkHttp(config.value.link));

// 链接是否具有非http协议
const hasNonHttpProtocol = computed(
  () => isLinkMailto(config.value.link) || isLinkTel(config.value.link)
);

// 解析链接打开方式
const linkTarget = computed(() =>
  hasNonHttpProtocol.value
    ? undefined
    : config.value.target || (hasHttpProtocol.value ? "_blank" : undefined)
);

// if the `target` attr is "_blank"
const isBlankTarget = computed(() => linkTarget.value === "_blank");

// render `<RouterLink>` or not
const renderRouterLink = computed(
  () =>
    !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value
);

// resolve the `rel` attr
const anchorRel = computed(() =>
  hasNonHttpProtocol.value
    ? undefined
    : config.value.rel ||
      (isBlankTarget.value ? "noopener noreferrer" : undefined)
);

// resolve the `aria-label` attr
const linkAriaLabel = computed(
  () => config.value.ariaLabel || config.value.text
);

// should be active when current route is a subpath of this link
const shouldBeActiveInSubpath = computed(() => {
  // should not be active in `exact` mode
  if (props.exact) return false;

  const localeKeys = keys(siteData.value.locales);

  return localeKeys.length
    ? // check all the locales
      localeKeys.every((key) => key !== config.value.link)
    : // check root
      config.value.link !== "/";
});

// if this link is active
const isActive = computed(() =>
  renderRouterLink.value
    ? config.value.activeMatch
      ? new RegExp(config.value.activeMatch).test(route.path)
      : // if this link is active in subpath
      !shouldBeActiveInSubpath.value
      ? route.path === config.value.link
      : startsWith(route.path, config.value.link)
    : false
);
</script>

<style lang="scss" scoped></style>
