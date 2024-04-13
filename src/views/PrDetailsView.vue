<template>
  <main class="wrapper">
    <Suspense>
      <template #default>
        <section>
          <div class="project__title">
            <AppButtonBack />
            <h2>{{ dataItem.title }}</h2>
          </div>

          <p class="project__text">{{ dataItem.shortDesc }}</p>

          <SwiperContainer :data-item="dataItem" />

          <div class="projects__stack stack">
            <h2 class="stack__title">
              {{ $t("details.stack") }}
            </h2>
            <p class="stack__desc">{{ dataItem.stack }}</p>
          </div>

          <div class="project__links">
            <PrDetailsReferences
              v-if="dataItem.liveUrl"
              :title="$t('details.linkLive')"
              :url-link="dataItem.liveUrl"
            />
            <PrDetailsReferences
              v-if="dataItem.repoUrl"
              :title="$t('details.linkRepo')"
              :url-link="dataItem.repoUrl"
            />
          </div>
        </section>
      </template>

      <template #fallback>
        <AppLoadSpinner />
      </template>
    </Suspense>
  </main>
</template>

<script setup>
import AppLoadSpinner from "@/components/AppLoadSpinner.vue";
import AppButtonBack from "@/components/AppButtonBack.vue";
import {
  computed,
  onBeforeUnmount,
  onMounted,
  watch,
  defineAsyncComponent,
  ref,
} from "vue";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useDatabaseStore } from "@/store/databaseStore";

const SwiperContainer = defineAsyncComponent(() =>
  import("@/components/slider/SwiperContainer.vue"),
);
const PrDetailsReferences = defineAsyncComponent(() =>
  import("@/views/PrDetailsReferences.vue"),
);
const { locale, t } = useI18n();
const store = useDatabaseStore();
const route = useRoute();
const router = useRouter();

const category = ref("");
const dataItem = computed(() => store.item);

const fetchItemOnLocaleChange = () => {
  store
    .fetchItem({
      id: Number(route.params.id),
      locale: locale.value,
      category: category.value,
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

// watch(
//   () => locale.value,
//   () => fetchItemOnLocaleChange(),
// );

onMounted(() => {
  category.value = route.path.split("/")[2];
  fetchItemOnLocaleChange();
});

onBeforeUnmount(() => store.resetItem());
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

.stack {
  padding: 20px 0;
  &__desc {
    padding: 0;
  }
}
</style>
