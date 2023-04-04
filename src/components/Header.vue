<script>
export default {};
</script>

<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav">
        <RouterLink class="header__link" exact-active-class="active-link" to="/"
          >About</RouterLink
        >
        <RouterLink
          class="header__link"
          active-class="active-link"
          to="/projects"
          >Projects</RouterLink
        >
        <RouterLink
          class="header__link"
          active-class="active-link"
          to="/contacts"
          >Contacts</RouterLink
        >
      </nav>
      <a
        href="https://drive.google.com/u/1/uc?id=1xFofPXShHbUfT7SISAzqGvd3oOdeCYLY&export=download"
        rel="noopener"
        class="header__btn-cv"
        title="Download CV"
        download
        >Download CV</a
      >
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}

.active-link {
  border-bottom: 3px solid #61cf9e;
}

.header {
  font-family: Poppins;

  &__title {
    font-weight: 400;
  }

  &__nav {
    display: flex;
    gap: 60px;
  }

  &__btn-cv {
    display: block;
    text-decoration: none;
    border: 2px solid var(--white);
    background-color: transparent;
    color: var(--white);
    padding: 10px 25px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 200ms ease-in;

    &:hover {
      background-color: antiquewhite;
      background-color: #1d1d1e;
    }
  }

  &__link {
    text-decoration: none;
    color: var(--white);
    font-weight: 500;
    font-size: 18px;
  }
}
</style>
