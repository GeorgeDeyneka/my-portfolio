<template>
  <div class="wrapper">
    <StackDesc :textData="textData" />

    <div class="tech__experience experience">
      <h3 class="experience__subtitle">Experience</h3>
      <h2 class="experience__title">I have work experience with:</h2>

      <StackList
        v-for="item of techData"
        :iconSize="iconSize"
        :key="item"
        :title="item.title"
        :arrData="item.data"
      />
    </div>
  </div>
</template>

<script>
import StackList from "@/views/StackList.vue";
import StackDesc from "@/views/StackDesc.vue";
import { TECHNOLOGIES_SVG, PARAGRAPH_CONTENT } from "@/data/technologiesData";
import { mapGetters } from "vuex";

export default {
  components: {
    StackDesc,
    StackList
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

<style lang="scss" scoped>
.experience {
  padding: 60px 0;

  &__title {
    font-size: 30px;
    padding: 10px 0;
  }
}
</style>
