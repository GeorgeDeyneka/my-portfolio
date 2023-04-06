<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },

    basePath: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <svg :style="{ '--hover-color': item?.hoverColor }" class="icon-svg">
    <use :href="basePath + item.path"></use>
  </svg>
</template>

<style lang="scss" scoped>
.icon-svg {
  display: block;
  fill: #fff;
  width: 50px;
  height: 50px;

  &:hover {
    transition: fill 200ms ease-in;
    fill: var(--hover-color);
  }
}
</style>
