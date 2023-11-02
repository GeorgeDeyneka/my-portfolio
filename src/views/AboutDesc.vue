<template>
  <div class="about">
    <h3 class="green-subtitle">{{ $t("about.results.subtitle") }}</h3>

    <h2 class="about__title title">{{ $t("about.results.title") }}</h2>

    <ButtonLink :text="$t('button.hire.text')" :link="$t('button.hire.link')" />

    <div class="about__content">
      <figure class="about__img">
        <img src="@/assets/images/modules.svg" alt="Modules" />
      </figure>

      <div class="about__info">
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

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media #{$desktop-sm} {
      flex-direction: row;
    }
  }

  &__img {
    padding-top: 20px;

    @media #{$desktop-sm} {
      padding-top: 20px;
    }

    img {
      width: 400px;
      height: auto;
    }
  }

  &__info {
    max-width: 550px;
    padding: 45px 0;
    align-self: end;
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
