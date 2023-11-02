<template>
  <div class="collab">
    <h3 class="green-subtitle">{{ $t("about.collab.subtitle") }}</h3>
    <h2 class="collab__title">{{ $t("about.collab.title") }}</h2>

    <div class="collab__buttons">
      <ButtonNav
        :text="$t('button.contacts.text')"
        :route="$t('button.contacts.link')"
      />
      <ButtonLink
        :text="$t('button.hire.text')"
        :link="$t('button.hire.link')"
      />
    </div>
  </div>
</template>

<script setup>
import ButtonLink from "@/components/ButtonLink.vue";
import ButtonNav from "@/components/ButtonNav.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base/variables.scss";

.collab {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 150px;

  &__title {
    font-size: 45px;
    padding: 10px 0 40px;
    max-width: 650px;
    text-align: center;
    line-height: 1.3;

    @media #{$tablet} {
      font-size: 80px;
    }
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    align-items: center;

    @media #{$tablet} {
      gap: 40px;
    }
  }
}
</style>
