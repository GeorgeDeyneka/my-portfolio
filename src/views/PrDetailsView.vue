<template>
  <div class="wrapper">
    <Suspense>
      <template #default>
        <div>
          <div class="project__title">
            <ButtonBack route="/projects" />
            <h1>{{ dataItem.title }}</h1>
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
        </div>
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
import ButtonBack from "@/components/ButtonBack.vue";

const PrDetailsSwiper = defineAsyncComponent(() =>
  import("@/views/PrDetailsSwiper.vue"),
);

const PrDetailsReferences = defineAsyncComponent(() =>
  import("@/views/PrDetailsReferences.vue"),
);

export default {
  components: {
    PrDetailsSwiper,
    PrDetailsReferences,
    LoadSpinner,
    ButtonBack,
    Suspense,
  },

  computed: {
    dataItem() {
      return this.$store.state.item;
    },

    referencesData() {
      return [
        { title: "Live Page", url: this.dataItem.liveUrl },
        { title: "Repository Page", url: this.dataItem.repoUrl },
      ];
    },
  },

  mounted() {
    this.$store
      .dispatch("fetchItem", Number(this.$route.params.id))
      .then((resp) => {
        this.checkItemAndRedirect(resp);
      });
  },

  beforeUnmount() {
    return this.$store.commit("resetItem");
  },
  methods: {
    checkItemAndRedirect(resp) {
      if (resp === null) {
        return this.$router.push({ name: "not-found" });
      }
    },
  },
};
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
