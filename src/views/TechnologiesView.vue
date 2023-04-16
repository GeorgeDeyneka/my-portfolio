<script>
import TechList from "../components/TechList.vue";
import { TECH_DATA } from "../data/techSvgData";

export default {
  components: {
    TechList,
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

  <TechList
    v-for="item of techData"
    :key="item"
    :title="item.title"
    :arrData="item.data"
  />
</template>

<style lang="scss" scoped>
.tech {
  &__title {
    padding: 20px 0;
  }
}
</style>
