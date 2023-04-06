<script>
import LogoList from "../components/LogoList.vue";
import { TECH_DATA, SPRITE_PATH } from "../data/techSvgData";

export default {
  components: {
    LogoList,
  },

  data() {
    return {
      url: SPRITE_PATH,
      techData: TECH_DATA,
    };
  },
};
</script>

<template>
  <h1 class="tech__title">I have work experience with:</h1>

  <LogoList
    v-for="item of techData"
    :basePath="url"
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
