<template>
  <nav class="menu__nav">
    <RouterLink
      v-for="route of arrRoutes"
      class="nav-link"
      exact-active-class="nav-link-active"
      :key="route"
      :to="route.path"
      >{{ route.name }}</RouterLink
    >
  </nav>
</template>

<script>
import { ARR_ROUTES } from "@/data/routesData"

export default {
  data() {
    return {
      arrRoutes: ARR_ROUTES,
    };
  },
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
