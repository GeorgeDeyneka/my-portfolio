<script>
import ProjectItem from "./ProjectItem.vue";
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    store.dispatch("fetchItems");
    const arrProjects = computed(() => store.state.items);

    return {
      arrProjects,
    };
  },

  components: {
    ProjectItem,
  },
});
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
