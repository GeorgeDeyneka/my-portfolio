<script>
import SvgIcon from "../../components/icons/SvgIcon.vue";

export default {
  props: {
    title: {
      type: String,
      required: false,
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
  <h2 v-if="title">{{ title }}:</h2>

  <ul
    :style="{
      gap: Math.floor(iconSize / 3.3) + 'px',
      margin: iconSize <= 50 ? 0 : '',
    }"
    class="tech__logos"
  >
    <li class="tech__item" v-for="item of arrData" :key="item">
      <SvgIcon :item="item" :size="iconSize" />
      <p v-if="item.name" class="tech__name">{{ item.name }}</p>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.tech {
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    max-width: min-content;
  }

  &__name {
    text-align: center;
    font-weight: 500;
    padding: 10px 0;
    font-size: 16px;
  }

  &__logos {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0;
  }
}

@media (min-width: 768px) {
  .tech {
    &__name {
      font-size: 18px;
    }
  }
}
</style>
