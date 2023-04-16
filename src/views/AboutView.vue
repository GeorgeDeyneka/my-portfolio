<script>
export default {};
</script>

<template>
  <div class="wrapper">
    <h1 class="about__title">George Deyneka</h1>

    <p class="about__paragraph">
      Let's get acquainted! My name is George Deyneka, and this is my personal
      portfolio. I'm a frontend developer developing apps with Vue.js and
      Angular.
    </p>
    <p class="about__paragraph">
      You can go to the
      <RouterLink class="about__link" to="/projects">Projects</RouterLink>
      section to see my work.
    </p>
    <p class="about__paragraph">
      You can also learn more about the technologies I use in the
      <RouterLink class="about__link" to="/stack">Technologies</RouterLink>
      section.
    </p>
  </div>
</template>

<style lang="scss" scoped>
@media (min-width: 320px) {
  .about {
    &__title {
      padding: 80px 0;
      font-size: 65px;
    }

    &__link {
      text-decoration: none;
      color: #61cf9e;
    }

    &__paragraph {
      font-size: 18px;
      padding: 5px 0;
      color: #aaa;
      max-width: 700px;
    }
  }
}

@media (min-width: 768px) {
  .about {
    &__title {
      font-size: 80px;
    }
  }
}
</style>
