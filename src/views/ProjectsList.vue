<template>
  <ul class="list-wrapper">
    <ProjectsItem
      v-for="item of arrProjects"
      :key="item"
      :project-item="item"
      :current-route="secondPartOfRoute"
    />
  </ul>
</template>

<script setup>
import ProjectsItem from "@/views/ProjectsItem.vue";
import { computed, onMounted, watch, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const { locale } = useI18n();
const store = useStore();
const route = useRoute();

const arrProjects = computed(() => store.state.databaseModule.items);
const secondPartOfRoute = ref("");

const fetchDataOnLocaleChange = () => {
  store.dispatch("fetchItems", locale.value);
};

watch(
  () => locale.value,
  () => fetchDataOnLocaleChange(),
);

onMounted(() => {
  secondPartOfRoute.value = route.path.split("/")[2];
  fetchDataOnLocaleChange();
  console.log(secondPartOfRoute.value);
});
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
