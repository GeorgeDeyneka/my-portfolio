<script>
import SvgIcon from "./icons/SvgIcon.vue";
import { debounce } from "lodash";

export default {
  props: {
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
  },

  components: {
    SvgIcon,
  },
};
</script>

<template>
  <h2>{{ title }}:</h2>

  <ul class="tech__logos">
    <li class="tech__item" v-for="item of arrData" :key="item">
      <SvgIcon :item="item" :size="iconSize" />
      <p class="tech__name">{{ item.name }}</p>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.tech {
  &__item {
    list-style: none;
    max-width: min-content;
  }

  &__name {
    text-align: center;
    font-weight: 500;
    padding: 10px 0;
  }

  &__logos {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    padding: 20px 0;
  }
}
</style>
