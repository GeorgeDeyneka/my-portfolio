<template>
  <div class="wrapper">
    <div class="start">
      <h1 class="start__title">George Deyneka</h1>

      <h4>
        Hello, my name is George. Nice to meet you! I would like to welcome you
        with my personal portfolio.
      </h4>
    </div>

    <AboutDesc />

    <AboutCollab />

    <!-- <p class="about__paragraph">
      You can go to the
      <RouterLink class="about__link" to="/projects">Projects</RouterLink>
      section to see my work. In this section, I would like to share with you
      some of the projects I have been working on.
    </p>
    
    <p class="about__paragraph">
      You can also learn more about the technologies I use in the
      <RouterLink class="about__link" to="/stack">Technologies</RouterLink>
      section.
    </p> -->
  </div>
</template>

<script>
import AboutDesc from "@/views/AboutDesc.vue";
import AboutCollab from "@/views/AboutCollab.vue";

export default {
  components: {
    AboutDesc,
    AboutCollab,
  },
};
</script>

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
