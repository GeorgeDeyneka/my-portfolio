<template>
  <h3 class="tech__subtitle">{{ title }}:</h3>

  <ul class="tech__logos">
    <li v-for="item of arrData" :key="item" class="tech__item">
      <SvgIcon :size="iconSize" :string-path="item.path" />
      <p class="tech__name">{{ item.name }}</p>
    </li>
  </ul>
</template>

<script setup>
import SvgIcon from "@/components/SvgIcon.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },

  arrData: {
    type: Array,
    required: true,
  },

  iconSize: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base/variables.scss";

.tech {
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    max-width: min-content;
  }

  &__subtitle {
    font-size: 20px;
  }

  &__name {
    text-align: center;
    font-weight: 500;
    padding: 10px 0;
    font-size: 16px;

    @media #{$tablet} {
      font-size: 18px;
    }
  }

  &__logos {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0;
    gap: 30px;
  }
}
</style>
