<template>
  <section class="stack">
    <div class="stack__title">
      <ButtonBack />

      <h2>{{ $t("tech.stack.title") }}</h2>
    </div>
    <p v-for="item of textList" :key="item">{{ item }}</p>
  </section>
</template>

<script setup>
import ButtonBack from "@/components/ButtonBack.vue";

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
