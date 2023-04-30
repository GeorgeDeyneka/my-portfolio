<script>
import { Suspense } from "vue";
import LoadSpinner from "../../components/LoadSpinner.vue";
import { defineAsyncComponent } from "vue";

const ProjectsList = defineAsyncComponent(() =>
  import("@/pages/projects/ProjectsList.vue")
);

export default {
  components: {
    LoadSpinner,
    ProjectsList,
    Suspense,
  },
};
</script>

<template>
  <div class="wrapper">
    <h1 class="projects__title">Projects I have worked on:</h1>
    <Suspense>
      <template #default>
        <ProjectsList />
      </template>
      <template #fallback>
        <LoadSpinner />
      </template>
    </Suspense>
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
}
</style>
