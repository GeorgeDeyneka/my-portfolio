<script>
import { ARR_ROUTES } from "/src/data/routesData";
import CloseBtn from "./CloseBtn.vue";
import OpenBtn from "./OpenBtn.vue";

export default {
  data() {
    return {
      isOpen: false,
      arrRoutes: ARR_ROUTES,
    };
  },

  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
      document.body.style.overflow = this.isOpen ? "hidden" : "";
    },
  },

  components: {
    OpenBtn,
    CloseBtn,
  },
};
</script>

<template>
  <OpenBtn @click="toggleMenu" />

  <div :class="{ opened: isOpen }" class="navbar">
    <CloseBtn @click="toggleMenu" />

    <nav class="navbar__list">
      <RouterLink
        class="nav-link navbar__link"
        exact-active-class="nav-link-active"
        v-for="route of arrRoutes"
        :key="route"
        :to="route.path"
        @click="toggleMenu"
        >{{ route.name }}</RouterLink
      >
    </nav>
  </div>

  <div v-if="isOpen" @click="toggleMenu" class="navbar__overlay"></div>
</template>

<style lang="scss" scoped>
.navbar {
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 300px;
  top: 0;
  left: 0;
  gap: 35px;
  background-color: var(--black);
  transform: translateX(-100%);
  transition: transform 0.4s ease-out;
  z-index: 1000;
  overflow: hidden;
  padding: 20px;

  &.opened {
    transform: translateX(0);
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__link {
    font-size: 30px;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
  }
}
</style>
