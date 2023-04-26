<script>
import { RouterView } from "vue-router";
import Header from "../components/Header.vue";
import store from "../store";
import { debounce } from "lodash";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    RouterView,
    Footer,
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
  <Header />
  <main class="main">
    <RouterView />
  </main>
  <Footer />
</template>

<style lang="scss" scoped>
@media (min-width: 320px) {
  .main {
    padding: 24px;
    padding-top: 0;
  }
}

@media (min-width: 768px) {
  .main {
    max-width: 1100px;
    width: 100%;
    flex: 1 1 auto;
    margin: 0 auto;
  }
}

@media (min-width: 1200px) {
  .main {
    padding: 0;
  }
}
</style>
