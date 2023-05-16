<script>
import { useStore } from "vuex";
import router from "@/router";
import LoadSpinner from "@/components/LoadSpinner.vue";
import { Suspense } from "vue";
import { defineAsyncComponent } from "vue";

const Swiper = defineAsyncComponent(() =>
  import("./details-swiper/Swiper.vue")
);

const ProjectReference = defineAsyncComponent(() =>
  import("./ProjectReference.vue")
);

export default {
  data() {
    return {
      store: useStore(),
    };
  },

  methods: {
    checkItemAndRedirect(resp) {
      if (resp === null) {
        return router.push({ name: "404-page" });
      }
    },
  },

  computed: {
    dataItem() {
      return this.store.state.item;
    },

    referencesData() {
      const liveUrl = this.dataItem.liveUrl;
      const repoUrl = this.dataItem.repoUrl;

      if (liveUrl && repoUrl) {
        return [
          { title: "Live Page", url: liveUrl },
          { title: "Repository Page", url: repoUrl },
        ];
      }

      return [];
    },
  },

  components: {
    Swiper,
    ProjectReference,
    LoadSpinner,
    Suspense,
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
};
</script>

<template>
  <div class="wrapper">
    <Suspense>
      <template #default>
        <div>
          <h1>{{ dataItem.title }}</h1>

          <p class="project__text">{{ dataItem.shortDesc }}</p>

          <Swiper :dataItem="dataItem" />

          <ProjectReference
            v-for="item of referencesData"
            :title="item.title"
            :urlLink="item.url"
          />
        </div>
      </template>
      <template #fallback>
        <LoadSpinner />
      </template>
    </Suspense>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  min-height: 600px;
}
.project {
  &__text {
    padding: 40px 0;
    max-width: 600px;
  }
}
</style>
