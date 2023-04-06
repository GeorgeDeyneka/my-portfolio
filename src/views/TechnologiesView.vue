<script>
import LogoList from "../components/LogoList.vue";
import { TECH_DATA } from "../data/svgPathData";

export default {
  components: {
    LogoList,
  },

  data() {
    return {
      techData: TECH_DATA,
    };
  },
};
</script>

<template>
  <h1 class="tech__title">I have work experience with:</h1>

  <LogoList
    v-for="item of techData"
    :key="item"
    :title="item.title"
    :arrOfPath="item.data"
  />
</template>

<!-- Think about rxjs logo visibility -->

<style lang="scss" scoped>
.tech {
  &__title {
    padding: 20px 0;
  }
}
</style>
