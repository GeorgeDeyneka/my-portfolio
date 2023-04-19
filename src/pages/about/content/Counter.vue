<script>
import { COUNT_STATISTICS } from "/src/data/aboutStatistics";

export default {
  data() {
    return {
      statistics: COUNT_STATISTICS,
      visible: false,
      startCount: 0,
    };
  },

  mounted() {
    this.observer = new IntersectionObserver(this.checkVisible, {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    });
    this.observer.observe(this.$refs.counter);
  },

  beforeUnmount() {
    this.observer.disconnect();
  },

  methods: {
    checkVisible(entries, observer) {
      const entry = entries.find((entry) => entry.isIntersecting);

      if (entry) this.visible = true;
    },
  },
};
</script>

<template>
  <div class="count" ref="counter">
    <div v-for="item of statistics" :key="item" class="count__block">
      <h2
        class="count__number"
        v-show="visible"
        :style="{ '--number': visible ? item.num : startCount }"
      >
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
      animation: count 1.5s steps(100) infinite;
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
