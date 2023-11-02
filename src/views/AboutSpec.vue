<template>
  <div class="about">
    <h3 class="green-subtitle">{{ $t("about.spec.subtitle") }}</h3>

    <h2 class="about__title title">{{ $t("about.spec.title") }}</h2>

    <div class="about__content">
      <div class="about__info">
        <ul class="about__list">
          <li
            v-for="text of $tm('about.spec.desc')"
            :key="text"
            class="li-text"
          >
            {{ text }}
          </li>
        </ul>
      </div>

      <figure class="about__img">
        <img src="@/assets/images/development.svg" alt="Development" />
      </figure>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/base/variables.scss";

.about {
  &__list {
    max-width: 600px;
  }

  &__info {
    max-width: 550px;
    padding: 45px 0;
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
    align-self: end;

    img {
      width: 400px;
      height: auto;
    }
  }
}
</style>
