<script>
import ButtonCV from "./ButtonCV.vue";

export default {
  components: {
    ButtonCV,
  },
};
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
          to="/stack"
          >Technologies</RouterLink
        >

        <RouterLink
          class="header__link"
          active-class="active-link"
          to="/contacts"
          >Contacts</RouterLink
        >
      </nav>

      <ButtonCV />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/variables.scss";

@media (min-width: 320px) {
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
      gap: 20px;
    }

    &__link {
      text-decoration: none;
      color: var(--white);
      font-weight: 500;
      font-size: 18px;
    }
  }
}

@media (min-width: 768px) {
  .container {
    padding: 20px 0;
  }

  .header {
    &__nav {
      gap: 60px;
    }
  }
}
</style>
