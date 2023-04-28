<script>
import TechList from "../pages/technologies/TechList.vue";
import { DEVELOPED_WITH_DATA } from "../data/footerData";
import { ARR_ROUTES } from "../data/routesData";

export default {
  data() {
    return {
      devWithData: DEVELOPED_WITH_DATA,
      navLinks: ARR_ROUTES,
    };
  },
  components: {
    TechList,
  },
};
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__tech technologies">
        <h2 class="technologies__title">Developed with:</h2>
        <TechList :arrData="devWithData" :iconSize="50" />
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  color: var(--gray-text);
  background-color: var(--dark-gray-bg);
}

.technologies {
  max-width: 350px;
  background-color: var(--black);
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  &__title {
    color: var(--white);
    border-bottom: 2px solid var(--light-green-accent);
    padding: 5px 0;
  }
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  justify-content: space-between
}

@media (min-width: 768px) {
  .container {
    padding: 10px 0;
  }
}
</style>
