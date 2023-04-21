<script>
export default {};
</script>

<template>
  <RouterLink class="btn" to="/contacts">Get in Touch</RouterLink>
</template>

<style lang="scss" scoped>
.btn {
  display: block;
  background-color: #75fa7f;
  border: 2px solid #75fa7f;
  transition: all 200ms ease-in;
  cursor: pointer;
  padding: 12px 35px;
  max-width: fit-content;
  text-decoration: none;
  color: #000;
  font-weight: 600;

  &:hover {
    background-color: #000;
    color: #75fa7f;
  }
}
</style>
