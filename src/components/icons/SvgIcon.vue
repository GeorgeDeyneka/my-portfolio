<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },

    size: {
      type: Number,
      default: 50,
    },
  },
};
</script>

<template>
  <svg
    :style="{
      '--hover-color': item?.hoverColor,
      width: item.width || `${size}px`,
      height: `${size}px`,
    }"
    class="icon-svg"
  >
    <use :href="item.path"></use>
  </svg>
</template>

<style lang="scss" scoped>
.icon-svg {
  display: block;
  fill: var(--white);
  flex-shrink: 0;

  &:hover {
    transition: fill 200ms ease-in;
    fill: var(--hover-color);
  }
}
</style>
