<script>
export default {};
</script>

<template>
  <button class="close-btn"></button>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/base/mixins.scss";

.close-btn {
  @include burger-button;
  position: relative;
  margin-left: auto;

  &::before,
  &::after {
    content: "";
    position: absolute;
    @include burger-line;
    left: 0;
  }

  &::before {
    top: 18px;
    rotate: -45deg;
  }

  &::after {
    bottom: 18px;
    rotate: 45deg;
  }
}
</style>
