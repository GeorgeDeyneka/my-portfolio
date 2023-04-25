<script>
import { RouterView } from "vue-router";
import HeaderVue from "../components/Header.vue";
import store from "../store";
import { debounce } from "lodash";

export default {
  components: {
    HeaderVue,
    RouterView,
  },

  mounted() {
    window.addEventListener("resize", this.updateScreenWidth);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.updateScreenWidth);
  },

  methods: {
    updateScreenWidth: debounce(function () {
      store.commit("setScreenWidth", window.innerWidth);
    }, 200),
  },
};
</script>

<template>
  <HeaderVue />
  <div class="container">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
@media (min-width: 320px) {
  .container {
    padding: 24px;
    padding-top: 0;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 1100px;
    margin: 0 auto;
  }
}

@media (min-width: 1200px) {
  .container {
    padding: 0;
  }
}
</style>
