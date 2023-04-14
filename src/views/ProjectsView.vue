<script>
import ProjectItem from "../components/ProjectItem.vue";
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    return {
      arrProjects: computed(() => store.state.items),
    };
  },

  mounted() {
    this.$store.dispatch("fetchItems");
  },

  components: {
    ProjectItem,
  },
});
</script>

<template>
  <h1 class="projects__title">Projects I have worked on:</h1>
  <div class="projects__wrapper">
    <ProjectItem :projectItem="item" v-for="item of arrProjects" />
  </div>
</template>

<style lang="scss" scoped>
.projects {
  &__title {
    padding: 20px 0;
  }

  &__wrapper {
    display: grid;
    justify-content: center;
    padding: 35px 0;
    gap: 35px;
    grid-template-columns: repeat(auto-fill, 312px);
  }
}
</style>
