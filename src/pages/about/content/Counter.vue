<script>
export default {
  data() {
    return {
      count: 0,
    };
  },

  props: {
    item: {
      required: true,
      type: Object,
      visible: false,
    },
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

      if (entry && !this.visible) {
        this.startCount(this.item.endNum, 1500);
        this.visible = true;
      }
    },

    startCount(endNum, ms) {
      if (this.count == endNum) return;

      const time = Math.round(ms / (endNum / 1));
      const interval = setInterval(() => {
        this.count++;

        if (this.count == endNum) clearInterval(interval);
      }, time);
    },
  },
};
</script>

<template>
  <div class="count" ref="counter">
    <h2 class="count__number" v-html="count"></h2>
    <span class="count__plus">+</span>
    <p class="count__text">{{ item.title }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/keyframes.scss";

@media (min-width: 320px) {
  .count {
    text-align: center;
    max-width: fit-content;
    padding: 10px;

    &__plus {
      font-size: 50px;
      font-weight: 600;
      color: #75fa7f;
      opacity: 0;
      animation: fade-in 2s 1s ease-out forwards;
    }

    &__number {
      font-size: 50px;
      font-weight: 600;
      display: inline-block;
    }

    &__text {
      font-size: inherit;
    }
  }
}
</style>
