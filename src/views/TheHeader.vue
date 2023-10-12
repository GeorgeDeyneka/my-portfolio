<template>
  <header class="header">
    <div class="container">
      <MenuMobile v-if="screenWidth < 768" />
      <MenuDesktop v-else />

      <div class="header__actions">
        <LangSwitcher />
        <ButtonLink
          link="public/resume.pdf"
          text="Download CV"
          download="George_Deyneka_(Frontend)_EN.pdf"
          size="small"
        />
      </div>
    </div>
  </header>
</template>

<script>
import ButtonLink from "@/components/ButtonLink.vue";
import MenuMobile from "@/views/MenuMobile.vue";
import MenuDesktop from "@/views/MenuDesktop.vue";
import LangSwitcher from "@/components/LangSwitcher.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ButtonLink,
    MenuMobile,
    MenuDesktop,
    LangSwitcher,
  },

  computed: {
    ...mapGetters(["screenWidth"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base/variables.scss";

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;

  @media #{$tablet} {
    padding: 20px 40px;
    max-width: 1100px;
    margin: 0 auto;
  }

  @media #{$desktop} {
    padding: 20px 0;
  }
}

.header {
  background-color: var(--black-header-bg);
  top: 0;
  position: sticky;
  z-index: 900;
  font-family: Mulish;
  // font-family: Poppins;

  &__actions {
    display: flex;
    gap: 40px;
    align-items: center;
  }
}
</style>
