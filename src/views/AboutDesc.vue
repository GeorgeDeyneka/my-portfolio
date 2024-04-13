<template>
  <section class="about">
    <h3 class="green-subtitle">{{ $t("about.results.subtitle") }}</h3>

    <h2 class="about__title title">{{ $t("about.results.title") }}</h2>

    <ButtonLink :text="$t('button.hire.text')" :link="$t('button.hire.link')" />

    <div class="about__content">
      <ul class="about__list list">
        <li
          v-for="text of $tm('about.results.desc')"
          :key="text"
          class="list__item li-text"
        >
          {{ text }}
        </li>
      </ul>

      <ul class="about__counter">
        <AboutCounter
          v-for="count of $tm('about.results.counter')"
          :key="count"
          :item="count"
        />
      </ul>
    </div>
  </section>
</template>

<script setup>
import ButtonLink from "@/components/ButtonLink.vue";
import AboutCounter from "@/views/AboutCounter.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base/variables.scss";

.about {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  background-color: var(--black-header-bg);

  @media #{$tablet} {
    padding: 50px 0;
  }

  @media #{$desktop-sm} {
    background-color: inherit;
  }

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("@/assets/images/chart.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-clip: cover;

    @media (min-width: 400px) {
      background-size: 380px;
    }

    @media #{$tablet} {
      background-position: left center;
      background-size: 350px;
    }
  }

  &__list {
    padding: 40px 0 20px;
  }

  &__counter {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;

    @media #{$tablet} {
      justify-content: flex-start;
      gap: 60px;
    }
  }

  &__content {
    @media #{$tablet} {
      max-width: 550px;
      align-self: end;
    }
  }

  &__link {
    text-decoration: none;
    color: var(--light-green-accent);
  }

  &__title {
    max-width: 550px;
    padding-bottom: 40px;
  }
}
</style>
