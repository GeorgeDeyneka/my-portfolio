<template>
  <svg
    :style="{
      '--fill-color': fillColor,
      '--hover-color': hoverColor,
      width: `${size}px`,
      height: `${size}px`,
    }"
    class="icon-svg"
  >
    <use :href="stringPath" />
  </svg>
</template>

<script>
export default {
  props: {
    stringPath: {
      type: String,
      required: true,
    },

    size: {
      type: Number,
      default: 50,
    },

    hoverColor: {
      type: String,
      default: null,
    },

    fillColor: {
      type: String,
      default: null,
    },
  },
};
</script>

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
