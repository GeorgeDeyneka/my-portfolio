<script>
import ButtonHireMe from "../../components/buttons/ButtonHireMe.vue";

export default { components: { ButtonHireMe, ButtonHireMe } };
</script>

<template>
  <div class="wrapper">
    <h1 class="about__main-title">George Deyneka</h1>

    <p class="about__paragraph">
      Hello, my name is George. Nice to meet you! I would like to welcome you
      with my personal portfolio.
    </p>

    <div class="about__content-block">
      <h3 class="about__subtitle">About Me</h3>
      <h2 class="about__title">
        I can deliver results that exceed your expectations.
      </h2>

      <ButtonHireMe />

      <p class="about__text">
        I am a front-end developer with 1 year of experience. My core skills
        include developing web applications using the Angular or Vue.js
        frameworks.
      </p>

      <p class="about__text">
        I am proficient in adaptive layout, SPA development, working with the
        server and asynchronous code. I work with modern frameworks and also
        have experience building applications written in Vanilla JavaScript. I
        also work with databases like MongoDB and Firebase Realtime Database.
      </p>

      <p class="about__text">
        It is worth mentioning the observance of such important development
        principles as DRY, KISS and SOLID. Of course, I work with the GIT
        version control system.
      </p>
    </div>

    <!-- <p class="about__paragraph">
      Let's get acquainted! My name is George and I am a front-end developer
      with 1 year of experience. My core skills include developing web
      applications using the Angular or Vue.js frameworks.
    </p>
    <p class="about__paragraph">
      You can go to the
      <RouterLink class="about__link" to="/projects">Projects</RouterLink>
      section to see my work. In this section, I would like to share with you
      some of the projects I have been working on.
    </p>
    <p class="about__paragraph">
      You can also learn more about the technologies I use in the
      <RouterLink class="about__link" to="/stack">Technologies</RouterLink>
      section.
    </p>

    <p class="about__paragraph">
      Interested in my services? Hire me now or go to the
      <RouterLink class="about__link" to="/contacts">Contacts</RouterLink>
      section and do it in a convenient way for you!
    </p> -->

    <!-- <ButtonHireMe /> -->
  </div>
</template>

<style lang="scss" scoped>
@media (min-width: 320px) {
  .about {
    &__main-title {
      padding: 180px 0 40px;
      font-size: 65px;
    }

    &__content-block {
      padding: 100px 0;
    }

    &__subtitle {
      color: #61cf9e;
    }

    &__title {
      font-size: 30px;
      max-width: 550px;
      padding: 10px 0 40px;
    }

    &__link {
      text-decoration: none;
      color: #61cf9e;
    }

    &__paragraph {
      font-size: 18px;
      padding: 15px 0;
      color: #aaa;
      max-width: 700px;
    }
  }
}

@media (min-width: 768px) {
  .about {
    &__main-title {
      font-size: 180px 0 40px;
    }
  }
}
</style>
