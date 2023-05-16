<script>
export default {
  props: {
    item: {
      type: Object,
      required: false,
    },

    stringPath: {
      type: String,
      required: false,
    },

    size: {
      type: Number,
      default: 50,
    },

    hoverColor: {
      type: String,
      required: false,
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
      width: `${size}px`,
      height: `${size}px`,
    }"
    class="icon-svg"
  >
    <use :href="stringPath || item.path"></use>
  </svg>
</template>

<style lang="scss" scoped>
@mixin svg-hover {
  transition: fill 200ms ease-in;
  fill: var(--hover-color);
}

.icon-svg {
  display: block;
  flex-shrink: 0;
  fill: var(--fill-color);

  &:hover {
    @include svg-hover;
  }
}

.hovered {
  @include svg-hover;
}
</style>
