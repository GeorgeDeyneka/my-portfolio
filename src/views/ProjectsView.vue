<template>
  <div class="wrapper">
    <h1>Projects I have worked on:</h1>
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

<script>
import { Suspense } from "vue";
import { defineAsyncComponent } from "vue";
import LoadSpinner from "@/components/LoadSpinner.vue";

const ProjectsList = defineAsyncComponent(() =>
  import("@/views/ProjectsList.vue")
);

export default {
  components: {
    LoadSpinner,
    ProjectsList,
    Suspense,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  min-height: 600px;
}
</style>
