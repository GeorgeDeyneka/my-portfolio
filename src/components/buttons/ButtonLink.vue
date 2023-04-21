<script>
export default {
  props: {
    text: {
      required: true,
      type: String,
    },

    link: {
      required: true,
      type: String,
    },

    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ["medium", "small"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<template>
  <a
    rel="noopener"
    class="btn"
    :href="link"
    :class="{
      small: size === 'small',
      medium: size === 'medium',
    }"
    :title="text"
    >{{ text }}</a
  >
</template>

<style lang="scss" scoped>
.small {
  padding: 10px 25px;
}

.medium {
  padding: 12px 35px;
}

.btn {
  display: block;
  text-decoration: none;
  border: 2px solid var(--white);
  background-color: transparent;
  color: var(--white);
  font-weight: 500;
  transition: background-color 200ms ease-in;
  cursor: pointer;
  max-width: fit-content;

  &:hover {
    background-color: #1d1d1e;
  }
}
</style>
