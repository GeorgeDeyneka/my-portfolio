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
@media (min-width: 320px) {
  .container {
    padding: 24px;
  }
}

@media (min-width: 768px) {
  .container {
    padding: 0;
    max-width: 1100px;
    margin: 0 auto;
  }
}
</style>
