<script>
import ButtonHireMe from "../../../components/buttons/ButtonHireMe.vue";
import Counter from "./Counter.vue";
import { COUNT_STATISTICS } from "/src/data/aboutStatistics";

export default {
  data() {
    return {
      statistics: COUNT_STATISTICS,
    };
  },

  components: {
    ButtonHireMe,
    Counter,
  },
};
</script>

<template>
  <div class="about">
    <h3 class="about__subtitle">About Me</h3>
    <h2 class="about__title">
      I can deliver results that exceed your expectations.
    </h2>
    <ButtonHireMe />

    <!-- think about this structure -->
    <div class="about__text-wrapper">
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

      <p class="about__text">
        If you want to learn more about the technologies that I use you can go
        to the
        <RouterLink class="about__link" to="/stack">Technologies</RouterLink>
        section.
      </p>

      <div class="about__counter">
        <Counter v-for="item of statistics" :item="item" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media (min-width: 320px) {
  .about {
    display: flex;
    flex-direction: column;
    padding: 100px 0;

    &__counter {
      display: flex;
      gap: 60px;
      padding: 20px 0;
      flex-wrap: wrap;
      justify-content: center;
    }

    &__text {
      font-size: 16px;
      padding: 10px 0;

      &-wrapper {
        max-width: 550px;
        padding: 45px 0;
        align-self: end;
      }
    }

    &__link {
      text-decoration: none;
      color: #61cf9e;
    }

    &__subtitle {
      color: #61cf9e;
    }

    &__title {
      font-size: 30px;
      max-width: 550px;
      padding: 10px 0 40px;
    }
  }
}
</style>
