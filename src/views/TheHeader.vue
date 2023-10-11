<template>
  <header class="header">
    <div class="container">
      <MenuMobile v-if="screenWidth < 768" />
      <MenuDesktop v-else />
      <ButtonLink
        link="public/resume.pdf"
        text="Download CV"
        download="George_Deyneka_(Frontend)_EN.pdf"
        size="small"
      />
    </div>
  </header>
</template>

<script>
import ButtonLink from "@/components/ButtonLink.vue";
import MenuMobile from "@/views/MenuMobile.vue";
import MenuDesktop from "@/views/MenuDesktop.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ButtonLink,
    MenuMobile,
    MenuDesktop,
  },

  computed: {
    ...mapGetters(["screenWidth"]),
  },
};
</script>

<style lang="scss" scoped>
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
