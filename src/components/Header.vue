<script>
export default {};
</script>

<template>
  <header class="header">
    <div class="container">
      <h2 class="header__title">George Deyneka portfolio</h2>
      <nav class="header__nav">
        <a class="header__link" href="#">About</a>
        <a class="header__link" href="#">Projects</a>
        <a class="header__link" href="#">Contacts</a>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 0;
}

.header {
  background-color: var(--nav-bg);
  font-family: Poppins;

  &__title {
    font-weight: 400;
  }

  &__nav {
    display: flex;
    gap: 20px;
  }

  &__link {
    text-decoration: none;
    color: var(--white);
    font-weight: 600;
    font-size: 18px;
  }
}
</style>
