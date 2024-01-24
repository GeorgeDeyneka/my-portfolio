<template>
  <section class="stack">
    <h3 class="stack__subtitle green-subtitle">
      {{ $t("tech.stack.subtitle") }}
    </h3>
    <h2 class="stack__title title">{{ $t("tech.stack.title") }}</h2>
    <p v-for="item of textList" :key="item">{{ item }}</p>
  </section>
</template>

<script setup>
defineProps({
  textList: {
    required: true,
    type: Array,
  },
});
</script>

<style lang="scss" scoped>
.stack {
  padding: 60px 0;
  max-width: 650px;
}
</style>
