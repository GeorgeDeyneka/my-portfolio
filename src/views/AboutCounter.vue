<script>
export default {
  props: {
    item: {
      required: true,
      type: Object,
      visible: false,
    },
  },
  data() {
    return {
      count: 0,
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
    checkVisible(entries) {
      const entry = entries.find((entry) => entry.isIntersecting);

      if (entry && !this.visible) {
        this.startCount(this.item.endNum, 1000);
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
  <div ref="counter" class="count">
    <h2 class="count__number" v-html="count"></h2>
    <span class="count__plus">+</span>
    <p class="count__text">{{ item.title }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/base/keyframes.scss";

.count {
  text-align: center;
  max-width: fit-content;
  padding: 10px;

  &__plus {
    font-size: 50px;
    font-weight: 600;
    color: var(--green-accent);
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
</style>
