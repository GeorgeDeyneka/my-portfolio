<template>
  <button class="btn" @click="router.back()">
    <SvgIcon
      class="icon"
      :size="30"
      string-path="#icon-arrow"
      fill-color="var(--white)"
    />
    {{ text }}
  </button>
</template>

<script setup>
import SvgIcon from "@/components/SvgIcon.vue";
import { useRouter } from "vue-router";

defineProps({
  text: {
    type: String,
    default: "",
  },
});

const router = useRouter();
</script>

<style lang="scss" scoped>
.icon {
  transform: rotate(-90deg);
}

.btn {
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  gap: 10px;
  font-size: 18px;
  transition: all 200ms ease-in;
  cursor: pointer;
  padding: 10px 0;
  max-width: fit-content;
  text-decoration: none;
  color: var(--white);
  font-weight: 600;
}
</style>
