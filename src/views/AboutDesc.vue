<template>
  <div class="about">
    <h3>About Me</h3>
    <h2 class="about__title">
      I can deliver results that exceed your expectations.
    </h2>
    <ButtonLink :text="btnHire.text" :link="btnHire.link" />

    <div class="about__text-wrapper">
      <p v-for="text of textData" :key="text">
        {{ text.content }}
      </p>

      <div class="about__counter">
        <Counter v-for="item of statistics" :item="item" :key="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLink from "@/components/ButtonLink.vue";
import Counter from "./AboutCounter.vue";
import { BUTTON_DATA } from "@/data/buttonsData";
import { COUNT_STATISTICS, PARAGRAPH_CONTENT } from "@/data/aboutData";

export default {
  data() {
    return {
      statistics: COUNT_STATISTICS,
      textData: PARAGRAPH_CONTENT,
      btnHire: BUTTON_DATA.hireMe,
    };
  },

  components: {
    Counter,
    ButtonLink,
  },
};
</script>

<style lang="scss" scoped>
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
</style>
