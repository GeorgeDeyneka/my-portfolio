<script>
import LogoList from "../components/LogoList.vue";
import { SVG_PATH_DATA } from "../data/svgPathData";

export default {
  components: {
    LogoList,
  },

  data() {
    return {
      buildersSvg: SVG_PATH_DATA.buildersSvg,
      softwareSvg: SVG_PATH_DATA.softwareSvg,
      librariesSvg: SVG_PATH_DATA.librariesSvg,
      frameworksSvg: SVG_PATH_DATA.frameworksSvg,
      mainStackSvg: SVG_PATH_DATA.mainStackSvg,
    };
  },
};
</script>

<template>
  <h1 class="tech__title">I have work experience with:</h1>

  <LogoList title="Frameworks" :arrOfPath="frameworksSvg" />
  <LogoList title="Tech stack" :arrOfPath="mainStackSvg" />
  <LogoList title="Builders" :arrOfPath="buildersSvg" />
  <LogoList title="Software" :arrOfPath="softwareSvg" />
  <LogoList title="Libraries" :arrOfPath="librariesSvg" />
</template>

<!-- Think about rxjs logo visibility -->

<style lang="scss" scoped>
.tech {
  &__title {
    padding: 20px 0;
  }
}
</style>
