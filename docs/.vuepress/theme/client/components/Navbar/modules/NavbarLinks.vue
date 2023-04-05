<template>
  <div>
    <nav class="nav-links">
      <div
        v-for="nav in useNavbarConfig"
        :key="nav.link"
        class="nav-item hide-in-mobile"
      >
        <div v-if="nav.children">{{ nav.text }}</div>
        <auto-link v-else :config="nav" />
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { resolveNavbarItem } from "../composables";
import { useThemeLocaleData } from "../../../composables";

import AutoLink from "../../AutoLink/index.vue";

const themeLocale = useThemeLocaleData();

const useNavbarConfig = computed(() =>
  (themeLocale.value.navbar || []).map((item) => resolveNavbarItem(item))
);
</script>

<style lang="scss">
.navbar {
  .nav-links {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
  }

  .nav-item {
    position: relative;
    margin: 0 0.25rem;
    line-height: 2rem;

    &:first-child {
      margin-inline-start: 0;
    }

    &:last-child {
      margin-inline-end: 0;
    }

    > .nav-link {
      display: flex;
      align-items: center;
      color: var(--dark-grey);

      &::after {
        content: " ";

        position: absolute;
        right: 50%;
        bottom: 0;
        left: 50%;

        height: 2px;
        border-radius: 1px;

        background: var(--theme-color-light);

        visibility: hidden;

        transition: left 0.2s ease-in-out, right 0.2s ease-in-out;
      }

      &.active {
        color: var(--theme-color);
      }

      &:hover,
      &.active {
        // stylelint-disable max-nesting-depth
        &::after {
          right: 0;
          left: 0;
          visibility: visible;
        }
        // stylelint-enable max-nesting-depth
      }
    }
  }
}
</style>