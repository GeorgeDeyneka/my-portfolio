<template>
  <nav class="menu__nav">
    <RouterLink
      v-for="route in $tm('nav')"
      :key="route.name"
      :class="{ 'nav-link-active': isExactRoute(route.path), 'nav-link': true }"
      :to="route.path"
      >{{ route.name }}</RouterLink
    >
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const isExactRoute = (path) => {
  return router.currentRoute.value.path.includes(path);
};
</script>

<style lang="scss" scoped>
.menu {
  &__nav {
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
  }
}
</style>
