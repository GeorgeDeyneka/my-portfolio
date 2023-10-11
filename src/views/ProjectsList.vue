<template>
  <div class="list-wrapper">
    <ProjectsItem v-for="item of arrProjects" :projectItem="item" :key="item" />
  </div>
</template>

<script>
import ProjectsItem from "@/views/ProjectsItem.vue";

export default {
  mounted() {
    this.$store.dispatch("fetchItems");
  },

  computed: {
    arrProjects() {
      return this.$store.state.items;
    },
  },

  components: {
    ProjectsItem,
  },
};
</script>

<style lang="scss" scoped>
.list-wrapper {
  display: grid;
  justify-content: center;
  padding: 50px 0;
  gap: 35px;
  grid-template-columns: repeat(auto-fill, 312px);
}
</style>
