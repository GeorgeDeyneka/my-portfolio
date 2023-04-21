<script>
export default {};
</script>

<template>
  <a
    href="https://drive.google.com/u/1/uc?id=1xFofPXShHbUfT7SISAzqGvd3oOdeCYLY&export=download"
    rel="noopener"
    class="btn-cv"
    title="Download CV"
    download
    >Download CV</a
  >
</template>

<style lang="scss" scoped>
.btn-cv {
  display: block;
  text-decoration: none;
  border: 2px solid var(--white);
  background-color: transparent;
  color: var(--white);
  font-weight: 500;
  transition: background-color 200ms ease-in;
  cursor: pointer;
  padding: 10px 25px;

  &:hover {
    background-color: #1d1d1e;
  }
}
</style>
