<template>
  <div class="stack">
    <h3 class="stack__subtitle">{{ $t("tech.stack.subtitle") }}</h3>
    <h2 class="stack__title">{{ $t("tech.stack.title") }}</h2>
    <p v-for="item of textList" :key="item">{{ item }}</p>
  </div>
</template>

<script>
export default {
  props: {
    textList: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.stack {
  padding: 60px 0;
  max-width: 650px;

  &__title {
    font-size: 30px;
    padding: 10px 0;
  }
}
</style>
