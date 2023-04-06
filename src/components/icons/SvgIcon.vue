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
    <use :href="basePath + item.path"></use>
  </svg>
</template>

<style lang="scss" scoped>
.icon-svg {
  display: block;
  fill: #fff;

  &:hover {
    transition: fill 200ms ease-in;
    fill: var(--hover-color);
  }
}
</style>
