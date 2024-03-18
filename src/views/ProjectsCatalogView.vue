<template>
  <main class="wrapper">
    <section class="projects">
      <div class="projects__title">
        <ButtonBack />
        <h2>{{ $t("projects.title") }}</h2>
      </div>

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
import ButtonBack from "@/components/ButtonBack.vue";

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
