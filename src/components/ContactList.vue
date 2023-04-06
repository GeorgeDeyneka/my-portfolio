<script>
import SvgIcon from "./icons/SvgIcon.vue";

export default {
  props: {
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
    SvgIcon,
  },

};
</script>

<template>
  <ul class="cont__list">
    <li class="cont__item" v-for="item of arrData">
      <a class="cont__link" :href="item.link" target="_blank">
        <SvgIcon :item="item" :basePath="basePath" />
        <h2 class="cont__subtitle">{{ item.title }}</h2>
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.cont {
  &__list {
    padding: 20px 0;
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 20px;
    text-decoration: none;
    max-width: fit-content;
  }

  &__subtitle {
    padding: 5px 10px;
    color: #fff;
  }

  &__item {
    list-style: none;
    padding: 10px 0;
  }
}
</style>
