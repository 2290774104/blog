<template>
  <div>
    <router-link :to="siteBrandLink">
      <img
        v-if="siteBrandLogo"
        class="logo"
        :src="siteBrandLogo"
        :alt="siteBrandTitle"
      />
      <img
        v-if="siteBrandLogoDark"
        class="logo dark"
        :src="siteBrandLogoDark"
        :alt="siteBrandTitle"
      />
      <span class="site-name hide-in-pad" v-if="siteBrandTitle">
        {{ siteBrandTitle }}</span
      >
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import {
  useThemeLocaleData,
} from "../../../composables";
import { useRouteLocale, useSiteLocaleData, withBase } from "@vuepress/client";

const routeLocale = useRouteLocale();
const siteLocale = useSiteLocaleData();
const themeLocale = useThemeLocaleData();

const siteBrandLink = computed(
  () => themeLocale.value.home || routeLocale.value
);

const siteBrandTitle = computed(() => siteLocale.value.title);

const siteBrandLogo = computed(() =>
  themeLocale.value.logo ? withBase(themeLocale.value.logo) : null
);

const siteBrandLogoDark = computed(() =>
  themeLocale.value.logoDark ? withBase(themeLocale.value.logoDark) : null
);
</script>

<style lang="scss">
.navbar {
  .logo {
    vertical-align: top;
    height: var(--navbar-line-height);
    margin-inline-end: 0.8rem;

    &.light {
      display: inline-block;
    }

    &.dark {
      display: none;
    }
  }

  .site-name {
    position: relative;
    color: var(--text-color);
    font-size: 1.25rem;

    @media (max-width: 719px) {
      overflow: hidden;
      width: calc(100vw - 9.4rem);
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .brand:hover & {
      color: var(--theme-color);
    }
  }
}
</style>