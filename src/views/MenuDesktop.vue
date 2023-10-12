<template>
  <nav class="menu__nav">
    <RouterLink
      v-for="route in $tm('nav')"
      :key="route"
      class="nav-link"
      exact-active-class="nav-link-active"
      :to="route.path"
      >{{ route.name }}</RouterLink
    >
  </nav>
</template>

<style lang="scss" scoped>
.menu {
  &__nav {
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
  }
}
</style>
