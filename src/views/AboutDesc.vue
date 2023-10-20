<template>
  <div class="about">
    <h3>{{ $t("about.results.subtitle") }}</h3>

    <h2 class="about__title">{{ $t("about.results.subtitle") }}</h2>

    <ButtonLink :text="$t('button.hire.text')" :link="$t('button.hire.link')" />

    <div class="about__text-wrapper">
      <p v-for="text of $tm('about.results.desc')" :key="text">
        {{ text }}
      </p>

      <div class="about__counter">
        <AboutCounter
          v-for="item of $tm('about.results.counter')"
          :key="item"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonLink from "@/components/ButtonLink.vue";
import AboutCounter from "@/views/AboutCounter.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base/variables.scss";

.about {
  display: flex;
  flex-direction: column;
  padding: 50px 0;

  &__counter {
    display: flex;
    gap: 60px;
    padding: 20px 0;
    flex-wrap: wrap;
    justify-content: center;

    @media #{$tablet} {
      justify-content: flex-start;
    }
  }

  &__text {
    &-wrapper {
      max-width: 550px;
      padding: 45px 0;
      align-self: end;
    }
  }

  &__link {
    text-decoration: none;
    color: var(--light-green-accent);
  }

  &__title {
    font-size: 30px;
    max-width: 550px;
    padding: 10px 0 40px;
  }
}
</style>
