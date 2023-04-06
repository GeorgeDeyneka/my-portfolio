<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },

    arrOfPath: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <h2>{{ title }}:</h2>

  <ul class="tech__logos">
    <li class="tech__item" v-for="item of arrOfPath" :key="item">
      <svg :style="{ width: item?.width }" class="icon-svg">
        <use :href="'src/assets/images/sprite.min.svg#' + item.path"></use>
      </svg>
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

.icon-svg {
  display: block;
  width: 100px;
  height: 100px;
}
</style>
