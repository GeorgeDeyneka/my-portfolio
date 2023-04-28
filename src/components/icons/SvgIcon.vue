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

    hoverColor: {
      type: String,
      required: false
    },

    fillColor: {
      type: String,
      required: false,
    },


  },
};
</script>

<template>
  <svg
    :style="{
      '--hover-color': hoverColor || item?.hoverColor,
      '--fill-color': fillColor || item?.fillColor,
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
  flex-shrink: 0;
  fill: var(--fill-color);

  &:hover {
    transition: fill 200ms ease-in;
    fill: var(--hover-color);
  }
}
</style>
