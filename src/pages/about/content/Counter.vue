<script>
import { COUNT_STATISTICS } from "/src/data/aboutStatistics";
export default {
  data() {
    return {
      statistics: COUNT_STATISTICS,
    };
  },
};
</script>

<template>
  <div class="count">
    <div v-for="item of statistics" :key="item" class="count__block">
      <h2 class="count__number" :style="{ '--number': item.num }">
        <span class="plus">+</span>
      </h2>
      <p class="count__text">{{ item.title }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/keyframes.scss";

@property --number {
  syntax: "<integer>";
  inherits: false;
  initial-value: 0;
}

@media (min-width: 320px) {
  .plus {
    color: #75fa7f;
    opacity: 0;
    animation: fade-in 2s 1s ease-out forwards;
  }

  .count {
    display: flex;
    gap: 60px;
    padding: 20px 0;
    flex-wrap: wrap;
    justify-content: center;

    &__block {
      text-align: center;
    }

    &__number {
      font-size: 50px;
      font-weight: 600;
      counter-reset: ms var(--number);
      animation: count 2s steps(100) infinite;
      animation-iteration-count: 1;

      &::before {
        content: counter(ms);
        font-size: 50px;
      }
    }

    &__text {
      font-size: inherit;
    }
  }
}

@media (min-width: 768px) {
  .count {
    justify-content: flex-start;
  }
}
</style>
