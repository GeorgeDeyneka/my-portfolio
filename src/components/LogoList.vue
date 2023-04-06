<script>
import SvgIcon from "./icons/SvgIcon.vue";

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

    basePath: {
      type: String,
      required: true,
    },
  },

  components: {
    SvgIcon
},
};
</script>

<template>
  <h2>{{ title }}:</h2>

  <ul class="tech__logos">
    <li class="tech__item" v-for="item of arrData" :key="item">
      <SvgIcon :item="item" :basePath="basePath" :size="100"/>
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
    gap: 30px;
    padding: 20px 0;
  }
}
</style>
