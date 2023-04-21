<script>
import AboutMe from "./content/AboutMe.vue";
import Collaboration from "./content/Collaboration.vue";

export default {
  components: {
    AboutMe,
    Collaboration,
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="about">
      <h1 class="about__main-title">George Deyneka</h1>

      <p class="about__paragraph">
        Hello, my name is George. Nice to meet you! I would like to welcome you
        with my personal portfolio.
      </p>
    </div>

    <AboutMe />

    <Collaboration />

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

<style lang="scss" scoped>
@media (min-width: 320px) {
  .about {
    padding: 50px 0;

    &__main-title {
      padding: 60px 0;
      font-size: 65px;
    }

    &__paragraph {
      font-size: 18px;
      padding: 15px 0;
      color: #aaa;
      max-width: 600px;
    }
  }
}

@media (min-width: 768px) {
  .about {
    &__main-title {
      padding: 70px 0 40px;
      font-size: 80px;
      max-width: 600px;
      line-height: 1.3;
    }
  }
}
</style>
