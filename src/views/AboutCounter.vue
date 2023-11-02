<template>
  <li ref="counter" class="count">
    <h2 class="count__number" v-html="count"></h2>
    <span class="count__plus">+</span>
    <p class="count__text">{{ item.text }}</p>
  </li>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const props = defineProps({
  item: {
    required: true,
    type: Object,
  },
});

const count = ref(0);
const counter = ref(null);
const item = props.item;
const visible = ref(false);

const observer = new IntersectionObserver(checkVisible, {
  root: null,
  rootMargin: "0px",
  threshold: 1,
});

onMounted(() => {
  observer.observe(counter.value);
});

onBeforeUnmount(() => observer.disconnect());

function checkVisible(entries) {
  const entry = entries.find((entry) => entry.isIntersecting);

  if (entry && !visible.value) {
    startCount(item.endNum, 1000);
    visible.value = true;
  }
}

function startCount(endNum, ms) {
  if (count.value == endNum) return;

  const time = Math.round(ms / (endNum / 1));
  const interval = setInterval(() => {
    count.value++;

    if (count.value == endNum) clearInterval(interval);
  }, time);
}
</script>

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
