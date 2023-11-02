<template>
  <div class="reference">
    <h2 class="reference__title">{{ title }}:</h2>
    <a class="reference__link" target="_blank" :href="urlLink">{{ urlLink }}</a>
  </div>
</template>

<script setup>
defineProps({
  urlLink: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base/mixins.scss";

.reference {
  @include ellipsis;
  margin: 30px 0;
  max-width: 100%;

  &__link {
    color: var(--light-green-accent);
    font-size: 18px;
    text-decoration: none;
  }

  &__title {
    font-size: 22px;
    line-height: 120%;
  }
}
</style>
