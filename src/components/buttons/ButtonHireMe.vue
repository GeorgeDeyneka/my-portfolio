<script>
export default {};
</script>

<template>
  <a
    href="mailto:%20zhoradeynecka@gmail.com"
    rel="noopener"
    title="Hire Me Now!"
    class="btn-hire"
    >Hire Me Now!</a
  >
</template>

<style lang="scss" scoped>
.btn-hire {
  display: block;
  text-decoration: none;
  border: 2px solid var(--white);
  background-color: transparent;
  color: var(--white);
  padding: 12px 35px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 200ms ease-in;
  max-width: fit-content;

  &:hover {
    background-color: #1d1d1e;
  }
}
</style>
