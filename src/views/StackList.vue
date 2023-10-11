<template>
  <h2>{{ title }}:</h2>

  <ul class="tech__logos">
    <li v-for="item of arrData" :key="item" class="tech__item">
      <SvgIcon :size="iconSize" :string-path="item.path" />
      <p class="tech__name">{{ item.name }}</p>
    </li>
  </ul>
</template>

<script>
import SvgIcon from "@/components/SvgIcon.vue";

export default {
  components: {
    SvgIcon,
  },

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
};
</script>

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
    gap: 30px;
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
