<template>
  <RouterLink class="btn" :to="route">
    <SvgIcon
      class="icon"
      :size="30"
      string-path="#icon-arrow"
      fill-color="var(--white)"
    />
    {{ text }}
  </RouterLink>
</template>

<script>
import SvgIcon from "@/components/SvgIcon.vue";

export default {
  components: { SvgIcon },

  props: {
    text: {
      type: String,
      default: "",
    },

    route: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  transform: rotate(-90deg);
}
.btn {
  display: flex;
  align-items: center;
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
