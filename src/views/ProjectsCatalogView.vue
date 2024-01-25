<template>
  <main class="wrapper">
    <section class="projects">
      <h2>{{ $t("projects.title") }}</h2>

      <Suspense>
        <template #default>
          <ProjectsList />
        </template>
        <template #fallback>
          <LoadSpinner />
        </template>
      </Suspense>
    </section>
  </main>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import LoadSpinner from "@/components/LoadSpinner.vue";

const ProjectsList = defineAsyncComponent(() =>
  import("@/views/ProjectsList.vue"),
);
</script>
