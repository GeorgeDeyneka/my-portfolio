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
          v-for="item of $tm('about.results.counter')"
          :key="item"
          :item="item"
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
  padding: 50px 0;
  background-color: var(--black-header-bg);

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
    height: -webkit-fill-available;
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

  &__content {
    padding: 45px 0;

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
