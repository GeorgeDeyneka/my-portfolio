<script>
export default {
  props: {
    textData: {
      required: true,
      type: Array,
    },
  },
};
</script>

<template>
  <div class="stack">
    <h3 class="stack__subtitle">Stack</h3>
    <h2 class="stack__title">Technologies that I use</h2>
    <p v-for="text of textData">{{ text.content }}</p>
  </div>
</template>

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
