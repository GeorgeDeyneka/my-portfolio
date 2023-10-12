<template>
  <nav class="menu__nav">
    <RouterLink
      v-for="route of arrRoutes"
      :key="route"
      class="nav-link"
      exact-active-class="nav-link-active"
      :to="route.path"
      >{{ route.name }}</RouterLink
    >
  </nav>

  <LangSwitcher />
</template>

<script>
import { ARR_ROUTES } from "@/data/routesData";
import LangSwitcher from "../components/LangSwitcher.vue";

export default {
  components: {
    LangSwitcher,
  },

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
