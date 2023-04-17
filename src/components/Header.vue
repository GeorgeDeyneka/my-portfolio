<script>
import ButtonCV from "./ButtonCV.vue";
import BurgerMenu from "./burger-menu/BurgerMenu.vue";
import DesktopMenu from "./DesktopMenu.vue";

export default {
  data() {
    return {
      screenWidth: window.innerWidth,
    };
  },

  components: {
    ButtonCV,
    BurgerMenu,
    DesktopMenu,
  },
};
</script>

<template>
  <header class="header">
    <div class="container">
      <BurgerMenu v-if="screenWidth < 768" />
      <DesktopMenu v-else />
      <ButtonCV />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/variables.scss";

@media (min-width: 320px) {
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header {
    font-family: Poppins;
  }
}

@media (min-width: 768px) {
  .container {
    padding: 20px 0;
  }
}
</style>
