<template>
  <main class="wrapper">
    <Suspense>
      <template #default>
        <section>
          <div class="project__title">
            <ButtonBack route="/projects" />
            <!-- <ButtonBack :route="router.go(-1)" /> -->
            <!-- <ButtonBack :route="router.back()" /> -->
            <h2>{{ dataItem.title }}</h2>
          </div>

          <p class="project__text">{{ dataItem.shortDesc }}</p>

          <PrDetailsSwiper :data-item="dataItem" />

          <div
            v-if="dataItem.liveUrl && dataItem.repoUrl"
            class="project__links"
          >
            <PrDetailsReferences
              v-for="item of referencesData"
              :key="item"
              :title="item.title"
              :url-link="item.url"
            />
          </div>
        </section>
      </template>

      <template #fallback>
        <LoadSpinner />
      </template>
    </Suspense>
  </main>
</template>

<script setup>
import LoadSpinner from "@/components/LoadSpinner.vue";
import ButtonBack from "@/components/ButtonBack.vue";
import {
  computed,
  onBeforeUnmount,
  onMounted,
  watch,
  defineAsyncComponent,
} from "vue";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";

const PrDetailsSwiper = defineAsyncComponent(() =>
  import("@/views/PrDetailsSwiper.vue"),
);
const PrDetailsReferences = defineAsyncComponent(() =>
  import("@/views/PrDetailsReferences.vue"),
);
const { locale, t } = useI18n();
const store = useStore();
const route = useRoute();
const router = useRouter();

const dataItem = computed(() => store.state.databaseModule.item);

const referencesData = computed(() => [
  { title: t("details.linkLive"), url: dataItem.value.liveUrl },
  { title: t("details.linkRepo"), url: dataItem.value.repoUrl },
]);

const fetchItemOnLocaleChange = () => {
  store
    .dispatch("fetchItem", {
      id: Number(route.params.id),
      locale: locale.value,
    })
    .then((resp) => {
      checkItemAndRedirect(resp);
    });
};

const checkItemAndRedirect = (resp) => {
  if (resp === null) {
    return router.push({ name: "not-found" });
  }
};

watch(
  () => locale.value,
  () => fetchItemOnLocaleChange(),
);

onMounted(() => fetchItemOnLocaleChange());

onBeforeUnmount(() => store.commit("resetItem"));
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  min-height: 600px;
}

.project {
  &__title {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  &__text {
    padding: 40px 0;
    max-width: 600px;
  }
}
</style>
