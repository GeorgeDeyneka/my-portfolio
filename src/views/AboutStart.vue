<template>
  <section class="start">
    <h1 class="start__title">{{ $t("about.start.title") }}</h1>

    <h4>{{ $t("about.start.desc") }}</h4>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/base/variables.scss";

.start {
  max-width: 550px;
  padding: 20px 0;

  @media #{$tablet} {
    padding: 50px 0;
  }

  &__title {
    padding: 40px 0;
    font-size: 65px;

    @media #{$tablet} {
      font-size: 80px;
      line-height: 1.3;
    }
  }
}
</style>
