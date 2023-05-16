<script>
export default {
  data() {
    return {
      rotateFlag: false,
    };
  },

  methods: {
    rotateIcon() {
      return (this.rotateFlag = !this.rotateFlag);
    },
  },
};
</script>

<template>
  <button class="btn" @click="rotateIcon">
    <svg class="icon" :class="{ rotate: rotateFlag }">
      <use href="#icon-arrow"></use>
    </svg>
  </button>
</template>

<style lang="scss" scoped>
@keyframes rotateAnimation {
  0% {
    transform: rotate(-90deg);
  }
  100% {
    transform: rotate(-270deg);
  }
}

.rotate {
  animation: rotateAnimation 100ms linear forwards;
}

.btn {
  background-color: transparent;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 5px;
  transition: background-color 150ms ease-out;
  border: none;
}

.icon {
  transform: rotate(-90deg);
  stroke: var(--light-green-accent);
  width: 24px;
  height: 24px;
}
</style>
