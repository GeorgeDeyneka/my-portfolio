<script>
export default {};
</script>

<template>
  <div class="spinner">
    <div class="spinner__circle"></div>
  </div>
</template>

<style lang="scss" scoped>
.spinner {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;

  &__circle {
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    width: 120px;
    height: 120px;

    &::after {
      content: "";
      display: block;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 10px solid #61cf9e;
      border-color: #61cf9e transparent #61cf9e transparent;
      animation: spinner 800ms infinite;
    }
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
