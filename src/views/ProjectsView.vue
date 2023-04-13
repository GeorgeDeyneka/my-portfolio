<script>
import ProjectItem from "../components/ProjectItem.vue";

export default {
  data() {
    return {
      arrData: [],
    };
  },

  components: {
    ProjectItem,
  },

  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      try {
        const snapshot = await this.$root.$database
          .ref("projects")
          .once("value");
        let resp = snapshot.val();

        for (const value of resp) {
          this.arrData.push(value);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<template>
  <h1 class="projects__title">Projects I have worked on:</h1>
  <div class="projects__wrapper">
    <ProjectItem :projectItem="item" v-for="item of arrData" />
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
