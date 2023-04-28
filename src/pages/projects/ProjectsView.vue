<script>
import ProjectItem from "./ProjectItem.vue";
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import LoadSpinner from "../../components/LoadSpinner.vue";

export default defineComponent({
  setup() {
    const store = useStore();
    const arrProjects = computed(() => store.state.items);

    return {
      arrProjects,
    };
  },

  data() {
    return {
      loading: true,
    };
  },

  mounted() {
    this.$store.dispatch("fetchItems").then(() => {
      this.loading = false;
    });
  },

  components: {
    ProjectItem,
    LoadSpinner,
  },
});
</script>

<template>
  <div class="wrapper">
    <LoadSpinner v-if="loading" />
    <h1 class="projects__title">Projects I have worked on:</h1>
    <div class="projects__wrapper">
      <ProjectItem
        v-for="item of arrProjects"
        :projectItem="item"
        :key="item"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  min-height: 600px;
}
.projects {
  &__title {
    padding: 20px 0;
  }

  &__wrapper {
    display: grid;
    justify-content: center;
    padding: 50px 0;
    gap: 35px;
    grid-template-columns: repeat(auto-fill, 312px);
  }
}
</style>
