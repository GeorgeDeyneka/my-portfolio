<template>
  <ul class="list-wrapper">
    <ProjectsItem
      v-for="item of arrProjects"
      :key="item"
      :project-item="item"
    />
  </ul>
</template>

<script setup>
import ProjectsItem from "@/views/ProjectsItem.vue";
import { computed, onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";

const { locale } = useI18n();
const store = useStore();

const arrProjects = computed(() => store.state.items);

const fetchDataOnLocaleChange = () => {
  store.dispatch("fetchItems", locale.value);
};

watch(
  () => locale.value,
  () => fetchDataOnLocaleChange(),
);

onMounted(() => fetchDataOnLocaleChange());
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
