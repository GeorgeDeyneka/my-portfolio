<script>
import ProjectItem from "./ProjectItem.vue";
import { useStore } from "vuex";

export default {
  data() {
    return {
      store: useStore(),
    };
  },

  mounted() {
    this.store.dispatch("fetchItems");
  },

  computed: {
    arrProjects() {
      return this.store.state.items;
    },
  },

  components: {
    ProjectItem,
  },
};
</script>

<template>
  <div class="list-wrapper">
    <ProjectItem v-for="item of arrProjects" :projectItem="item" :key="item" />
  </div>
</template>

<style lang="scss" scoped>
.list-wrapper {
  display: grid;
  justify-content: center;
  padding: 50px 0;
  gap: 35px;
  grid-template-columns: repeat(auto-fill, 312px);
}
</style>
