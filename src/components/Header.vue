<script>
import ButtonLink from "./buttons/ButtonLink.vue";
import BurgerMenu from "./nav-menu/burger-menu/BurgerMenu.vue";
import DesktopMenu from "./nav-menu/DesktopMenu.vue";
import { BUTTON_DATA } from "../data/buttonsData";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      BtnDowload: BUTTON_DATA.downloadCV,
    };
  },

  components: {
    ButtonLink,
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
      <ButtonLink
        :link="BtnDowload.link"
        :text="BtnDowload.text"
        size="small"
      />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
}

.header {
  background-color: var(--black-header-bg);
  top: 0;
  position: sticky;
  z-index: 900;
  font-family: Poppins;
}

@media (min-width: 768px) {
  .container {
    padding: 20px 40px;
    max-width: 1100px;
    margin: 0 auto;
  }
}

@media (min-width: 1200px) {
  .container {
    padding: 20px 0;
  }
}
</style>
