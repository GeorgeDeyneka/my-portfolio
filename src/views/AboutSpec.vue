<template>
  <section class="spec">
    <h3 class="green-subtitle">{{ $t("about.spec.subtitle") }}</h3>

    <h2 class="spec__title title">{{ $t("about.spec.title") }}</h2>

    <div class="spec__content">
      <ul class="spec__list">
        <li v-for="text of $tm('about.spec.desc')" :key="text" class="li-text">
          {{ text }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/base/variables.scss";

.spec {
  position: relative;
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
    height: 100%;
    background-image: url("@/assets/images/rocket.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-clip: cover;

    @media #{$tablet} {
      background-position: right center;
      background-size: 350px;
    }
  }

  &__list {
    max-width: 600px;
  }
}
</style>
