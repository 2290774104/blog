<template>
  <header class="navbar">
    <div class="navbar-start">
      <navbar-brand />
    </div>
    <div class="navbar-center">
      <navbar-links />
    </div>
    <div class="navbar-end">
      
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: "Navbar",
};
</script>

<script lang="ts" setup>
import NavbarBrand from "./modules/NavbarBrand.vue";
import NavbarLinks from "./modules/NavbarLinks.vue";
</script>

<style lang="scss">
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 175;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;

  width: 100%;
  height: var(--navbar-height);
  padding: var(--navbar-vertical-padding) var(--navbar-horizontal-padding);

  background: var(--navbar-bg-color);
  box-shadow: 0 2px 8px var(--card-shadow);

  line-height: var(--navbar-line-height);
  white-space: nowrap;

  transition: transform ease-in-out 0.3s, background var(--color-transition),
    box-shadow var(--color-transition);

  backdrop-filter: saturate(150%) blur(12px);

  @media print {
    display: none;
  }

  .hide-navbar &.auto-hide {
    transform: translateY(-100%);
  }

  .nav-link {
    padding: 0 0.25rem;
    color: var(--dark-grey);

    &.active {
      color: var(--theme-color);
    }

    .icon {
      margin-inline-end: 0.25em;
      font-size: 1em;
    }
  }

  &.hide-icon .nav-links .icon {
    display: none !important;
  }
}

.navbar-start,
.navbar-end,
.navbar-center {
  display: flex;
  flex: 1;
  align-items: center;

  > * {
    position: relative;
    margin: 0 0.25rem !important;

    &:first-child {
      margin-inline-start: 0 !important;
    }

    &:last-child {
      margin-inline-end: 0 !important;
    }
  }
}

.navbar-start {
  justify-content: start;
}

.navbar-center {
  justify-content: center;
}

.navbar-end {
  justify-content: end;
}
</style>