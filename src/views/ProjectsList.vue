<template>
  <ul class="list-wrapper">
    <ProjectsItem
      v-for="item of arrProjects"
      :key="item.title"
      :project-item="item"
      :current-route="secondPartOfRoute"
    />
  </ul>
</template>

<script setup>
import ProjectsItem from "@/views/ProjectsItem.vue";
import { computed, onMounted, watch, ref, onBeforeUnmount } from "vue";
import { useI18n } from "vue-i18n";
import { useDatabaseStore } from "@/store/databaseStore";
import { useRoute } from "vue-router";

const { locale } = useI18n();
const store = useDatabaseStore();
const route = useRoute();

const arrProjects = computed(() => store.items);
const secondPartOfRoute = ref("");

const fetchDataOnLocaleChange = () => {
  store.fetchItems({
    locale: locale.value,
    category: secondPartOfRoute.value,
  });
};

watch(
  () => locale.value,
  () => fetchDataOnLocaleChange(),
);

onMounted(() => {
  secondPartOfRoute.value = route.path.split("/")[2];
  fetchDataOnLocaleChange();
});

onBeforeUnmount(() => store.resetItems());
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
