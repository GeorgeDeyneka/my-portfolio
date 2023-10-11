<template>
  <MenuBtnOpen @click="toggleMenu" />

  <div :class="{ opened: isOpen }" class="navbar">
    <MenuBtnClose @click="toggleMenu" />

    <nav class="navbar__list">
      <RouterLink
        v-for="route of arrRoutes"
        :key="route"
        class="nav-link navbar__link"
        exact-active-class="nav-link-active"
        :to="route.path"
        @click="toggleMenu"
        >{{ route.name }}</RouterLink
      >
    </nav>
  </div>

  <div v-if="isOpen" class="navbar__overlay" @click="toggleMenu"></div>
</template>

<script>
import { ARR_ROUTES } from "@/data/routesData";
import MenuBtnClose from "@/views/MenuBtnClose.vue";
import MenuBtnOpen from "@/views/MenuBtnOpen.vue";

export default {
  components: {
    MenuBtnClose,
    MenuBtnOpen,
  },

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
};
</script>

<style lang="scss" scoped>
.navbar {
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100vh;
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
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
  }
}
</style>
