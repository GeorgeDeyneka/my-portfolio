<script>
import ButtonCV from "./ButtonCV.vue";
import BurgerMenu from "./burger-menu/BurgerMenu.vue";
import DesktopMenu from "./DesktopMenu.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ButtonCV,
    BurgerMenu,
    DesktopMenu,
  },

  computed: {
    ...mapGetters(["screenWidth"]),
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
