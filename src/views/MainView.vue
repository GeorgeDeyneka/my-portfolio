<template>
  <div class="app">
    <TheHeader />

    <router-view v-slot="{ Component }" class="main">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <TheFooter />
    <SvgSprite />
  </div>
</template>

<script setup>
import TheHeader from "@/views/TheHeader.vue";
import TheFooter from "@/views/TheFooter.vue";
import SvgSprite from "@/views/SvgSprite.vue";
import { debounce } from "lodash";
import { nextTick, onBeforeUnmount, onMounted, onUpdated } from "vue";
import { useScreenWidthStore } from "@/store/screenWidth";

const store = useScreenWidthStore();

const updateScreenWidth = () =>
  debounce(function () {
    store.setScreenWidth(window.innerWidth);
  }, 200);

onMounted(() => window.addEventListener("resize", updateScreenWidth()));

onUpdated(() =>
  nextTick(() =>
    setTimeout(() => window.scrollTo({ top: 0, behavior: "instant" }), 200),
  ),
);

onBeforeUnmount(() =>
  window.removeEventListener("resize", updateScreenWidth()),
);
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base/variables.scss";

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease-out;
}

.main {
  padding: 0 24px;
  flex: 1 1 auto;
  width: 100%;

  @media #{$tablet} {
    max-width: 1100px;
    margin: 0 auto;
  }

  @media #{$desktop} {
    padding: 0;
  }
}
</style>
