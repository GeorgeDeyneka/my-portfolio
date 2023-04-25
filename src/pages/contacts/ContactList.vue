<script>
import SvgIcon from "../../components/icons/SvgIcon.vue";

export default {
  props: {
    arrData: {
      type: Array,
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
        <SvgIcon :item="item" />
        <h2 class="cont__subtitle">{{ item.title }}</h2>
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@media (min-width: 320px) {
  .cont {
    &__list {
      padding: 20px 0;
    }

    &__link {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      max-width: fit-content;
    }

    &__subtitle {
      padding: 5px 10px;
      font-size: 16px;
      color: var(--white);
    }

    &__item {
      list-style: none;
      padding: 10px 0;
    }
  }
}

@media (min-width: 768px) {
  .cont {
    &__link {
      gap: 20px;
    }

    &__subtitle {
      font-size: 22.5px;
    }
  }
}
</style>
