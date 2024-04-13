<template>
  <section class="stack">
    <div class="stack__title">
      <AppButtonBack />

      <h2>{{ $t("tech.stack.title") }}</h2>
    </div>
    <p v-for="item of textList" :key="item">{{ item }}</p>
  </section>
</template>

<script setup>
import AppButtonBack from "@/components/AppButtonBack.vue";

defineProps({
  textList: {
    required: true,
    type: Array,
  },
});
</script>

<style lang="scss" scoped>
.stack {
  max-width: 650px;

  &__title {
    display: flex;
    align-items: center;
    gap: 30px;
  }
}
</style>
