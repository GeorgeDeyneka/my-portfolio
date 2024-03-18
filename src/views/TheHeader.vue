<template>
  <header class="header">
    <div class="container">
      <MenuMobile v-if="screenWidth < 1024" />
      <MenuDesktop v-else />

      <div class="header__actions">
        <LangSwitcher v-if="screenWidth >= 768" />
        <ButtonLink
          :link="$t('button.resume.link')"
          :text="$t('button.resume.text')"
          download="George_Deyneka_(Frontend)_EN.pdf"
          size="small"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import ButtonLink from "@/components/ButtonLink.vue";
import MenuMobile from "@/views/MenuMobile.vue";
import MenuDesktop from "@/views/MenuDesktop.vue";
import LangSwitcher from "@/components/LangSwitcher.vue";
import { useScreenWidthStore } from "@/store/screenWidth";
import { computed } from "vue";

const store = useScreenWidthStore();
const screenWidth = computed(() => store.screenWidth);
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

  &__actions {
    display: flex;
    gap: 40px;
    align-items: center;
  }
}
</style>
