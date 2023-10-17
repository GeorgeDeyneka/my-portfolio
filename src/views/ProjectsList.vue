<template>
  <ul class="list-wrapper">
    <ProjectsItem
      v-for="item of arrProjects"
      :key="item"
      :project-item="item"
    />
  </ul>
</template>

<script>
import ProjectsItem from "@/views/ProjectsItem.vue";

export default {
  components: {
    ProjectsItem,
  },

  computed: {
    arrProjects() {
      return this.$store.state.items;
    },
  },

  watch: {
    "$i18n.locale": "fetchDataOnLocaleChange",
  },

  mounted() {
    this.fetchDataOnLocaleChange();
  },

  methods: {
    fetchDataOnLocaleChange() {
      this.$store.dispatch("fetchItems", this.$i18n.locale);
    },
  },
};
</script>

<style lang="scss" scoped>
.list-wrapper {
  display: grid;
  justify-content: center;
  padding: 50px 0;
  align-items: stretch;
  gap: 35px;
  grid-template-columns: repeat(auto-fill, 312px);
}
</style>
