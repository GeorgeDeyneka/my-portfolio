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

  updated() {
    this.$nextTick(() => {
      setTimeout(() => window.scrollTo({ top: 0, behavior: "instant" }), 200);
    });
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
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <Footer />
</template>

<style lang="scss" scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease-out;
}
.main {
  padding: 24px;
  flex: 1 1 auto;
  width: 100%;
  padding-top: 0;
}

@media (min-width: 768px) {
  .main {
    max-width: 1100px;
    margin: 0 auto;
  }
}

@media (min-width: 1200px) {
  .main {
    padding: 0;
  }
}
</style>
