<script>
import TechList from "./TechList.vue";
import TechStack from "./content/TechStack.vue";
import {
  TECHNOLOGIES_SVG,
  PARAGRAPH_CONTENT,
} from "/src/data/technologiesData";
import { mapGetters } from "vuex";

export default {
  components: {
    TechList,
    TechStack
},

  data() {
    return {
      techData: TECHNOLOGIES_SVG,
      textData: PARAGRAPH_CONTENT,
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
  <div class="wrapper">
    <TechStack :textData="textData"/>

    <div class="tech__experience experience">
      <h3 class="experience__subtitle">Experience</h3>
      <h2 class="experience__title">I have work experience with:</h2>

      <TechList
        v-for="item of techData"
        :iconSize="iconSize"
        :key="item"
        :title="item.title"
        :arrData="item.data"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.experience {
  padding: 60px 0;

  &__title {
    font-size: 30px;
    padding: 10px 0;
  }
}
</style>
