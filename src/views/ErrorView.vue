<template>
  <div class="wrapper">
    <h1 class="error__title">404</h1>
    <p>Ooops... Page not found...</p>
    <RouterLink class="error__link" to="/">Go to home page</RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 40px 0;
}

.error {
  &__title {
    padding: 40px 0;
    font-size: 100px;
  }

  &__link {
    text-decoration: none;
    color: var(--light-green-accent);
    font-size: 18px;
  }
}
</style>
