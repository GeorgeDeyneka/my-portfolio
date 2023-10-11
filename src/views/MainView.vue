<template>
  <TheHeader />

  <main class="main">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>

  <TheFooter />
</template>

<script>
import { RouterView } from "vue-router";
import { debounce } from "lodash";
import TheHeader from "@/views/TheHeader.vue";
import TheFooter from "@/views/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    RouterView
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
      this.$store.commit('setScreenWidth', window.innerWidth)
    }, 200),
  },
};
</script>

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
