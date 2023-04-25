<script>
import ButtonLink from "../../../components/buttons/ButtonLink.vue";
import Counter from "./Counter.vue";
import { BUTTON_DATA } from "/src/data/buttonsData";
import { COUNT_STATISTICS, PARAGRAPH_CONTENT } from "/src/data/aboutData";

export default {
  data() {
    return {
      statistics: COUNT_STATISTICS,
      textData: PARAGRAPH_CONTENT,
      BtnHire: BUTTON_DATA.hireMe,
    };
  },

  components: {
    Counter,
    ButtonLink,
  },
};
</script>

<template>
  <div class="about">
    <h3 class="about__subtitle">About Me</h3>
    <h2 class="about__title">
      I can deliver results that exceed your expectations.
    </h2>
    <ButtonLink :text="BtnHire.text" :link="BtnHire.link" />

    <div class="about__text-wrapper">
      <p class="about__text" v-for="text of textData">
        {{ text.content }}
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
    padding: 50px 0;

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
      color: var(--light-green-accent);
    }

    &__subtitle {
      color: var(--light-green-accent);
    }

    &__title {
      font-size: 30px;
      max-width: 550px;
      padding: 10px 0 40px;
    }
  }

  @media (min-width: 768px) {
    .about {
      &__counter {
        justify-content: flex-start;
      }
    }
  }
}
</style>
