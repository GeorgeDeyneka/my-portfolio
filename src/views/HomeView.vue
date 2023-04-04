<script>
import { RouterView } from "vue-router";
import HeaderVue from "../components/Header.vue";

export default {
  components: {
    HeaderVue,
    RouterView,
  },
};
</script>

<template>
  <div class="container">
    <HeaderVue />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
