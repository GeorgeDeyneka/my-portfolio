<template>
  <main class="wrapper">
    <section class="projects">
      <div class="projects__title">
        <AppButtonBack />
        <h2>{{ $t("projects.title") }}</h2>
      </div>

      <Suspense>
        <template #default>
          <ProjectsList />
        </template>
        <template #fallback>
          <AppLoadSpinner />
        </template>
      </Suspense>
    </section>
  </main>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import AppLoadSpinner from "@/components/AppLoadSpinner.vue";
import AppButtonBack from "@/components/AppButtonBack.vue";

const ProjectsList = defineAsyncComponent(() =>
  import("@/views/ProjectsList.vue"),
);
</script>

<style lang="scss" scoped>
.projects {
  &__title {
    display: flex;
    align-items: center;
    gap: 30px;
  }
}
</style>
