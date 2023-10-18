<template>
  <button class="btn" @click="rotateIcon">
    <SvgIcon
      string-path="#icon-arrow"
      class="icon"
      :size="24"
      fill-color="var(--light-green-accent)"
      hover-color="var(--light-green-accent)"
      :class="{ rotate: rotateFlag }"
    />
  </button>
</template>

<script setup>
import SvgIcon from "@/components/SvgIcon.vue";
import { ref } from "vue";

const rotateFlag = ref(false);

const rotateIcon = () => (rotateFlag.value = !rotateFlag.value);
</script>

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
