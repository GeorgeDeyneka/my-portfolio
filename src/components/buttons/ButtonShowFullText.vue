<script>
import SvgIcon from "../icons/SvgIcon.vue";

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
  components: { SvgIcon },
};
</script>

<template>
  <button class="btn" @click="rotateIcon">
    <SvgIcon
      stringPath="#icon-arrow"
      class="icon"
      :size="24"
      fillColor="var(--light-green-accent)"
      hoverColor="var(--light-green-accent)"
      :class="{ rotate: rotateFlag }"
    />
  </button>
</template>

<style lang="scss" scoped>
@keyframes rotateAnimation {
  0% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
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
  transform: rotate(180deg);
}
</style>
