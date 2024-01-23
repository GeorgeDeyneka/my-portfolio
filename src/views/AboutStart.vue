<template>
  <section class="start">
    <h1 class="start__title">{{ $t("about.start.title") }}</h1>

    <h4>{{ $t("about.start.desc") }}</h4>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/base/variables.scss";

.start {
  padding: 50px 0;
  max-width: 550px;

  &__title {
    padding: 60px 0;
    font-size: 65px;

    @media #{$tablet} {
      padding: 70px 0 40px;
      font-size: 80px;
      line-height: 1.3;
    }
  }
}
</style>
