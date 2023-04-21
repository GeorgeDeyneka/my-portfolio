<script>
import TechList from "./TechList.vue";
import { TECHNOLOGIES_SVG } from "/src/data/technologiesData";
import { mapGetters } from "vuex";

export default {
  components: {
    TechList,
  },

  data() {
    return {
      techData: TECHNOLOGIES_SVG,
    };
  },

  computed: {
    ...mapGetters(["screenWidth"]),
    iconSize() {
      return this.screenWidth < 768 ? 70 : 100;
    },
  },
};
</script>

<template>
  <h1 class="tech__title">I have work experience with:</h1>

  <TechList
    v-for="item of techData"
    :iconSize="iconSize"
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
