<template>
  <div class="wrapper">
    <h1 class="error__title">404</h1>
    <p>Ooops... Page not found...</p>
    <RouterLink class="error__link" to="/">Go to home page</RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.error {
  &__title {
    padding: 80px 0;
    font-size: 80px;
  }

  &__link {
    text-decoration: none;
    color: var(--light-green-accent);
    font-size: 18px;
  }
}
</style>
