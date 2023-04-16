<script>
import TechList from "../components/TechList.vue";
import { TECH_DATA } from "../data/techSvgData";
import { debounce } from "lodash";

export default {
  components: {
    TechList,
  },

  data() {
    return {
      techData: TECH_DATA,
      screenWidth: window.innerWidth,
    };
  },

  mounted() {
    window.addEventListener("resize", this.updateScreenWidth);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.updateScreenWidth);
  },

  methods: {
    updateScreenWidth: debounce(function () {
      this.screenWidth = window.innerWidth;
    }, 200),
  },

  computed: {
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
