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
        { title: this.$t("details.linkLive"), url: this.dataItem.liveUrl },
        { title: this.$t("details.linkRepo"), url: this.dataItem.repoUrl },
      ];
    },
  },

  watch: {
    "$i18n.locale": "fetchItemOnLocaleChange",
  },

  mounted() {
    this.fetchItemOnLocaleChange();
  },

  beforeUnmount() {
    return this.$store.commit("resetItem");
  },

  methods: {
    fetchItemOnLocaleChange() {
      this.$store
        .dispatch("fetchItem", {
          id: Number(this.$route.params.id),
          locale: this.$i18n.locale,
        })
        .then((resp) => {
          this.checkItemAndRedirect(resp);
        });
    },

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
