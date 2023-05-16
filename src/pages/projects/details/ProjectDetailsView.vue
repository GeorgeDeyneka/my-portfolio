<script>
import { useStore } from "vuex";
import router from "@/router";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import Swiper from "./details-swiper/Swiper.vue";

register();

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
  },

  components: {
    Swiper
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
    <h1>{{ dataItem.title }}</h1>

    <p class="project__text">{{ dataItem.shortDesc }}</p>

    <Swiper :dataItem="dataItem" />

    <div class="project__references">
      <h2>Live page:</h2>
      <a class="project__link" target="_blank" :href="dataItem.liveUrl">{{
        dataItem.liveUrl
      }}</a>
    </div>
    <div class="project__references">
      <h2>Repository page:</h2>
      <a class="project__link" target="_blank" :href="dataItem.repoUrl">{{
        dataItem.repoUrl
      }}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/mixins.scss";

.project {
  &__text {
    padding: 40px 0;
    max-width: 600px;
  }

  &__references {
    @include ellipsis;
    margin: 30px 0;
    max-width: 100%;
  }

  &__link {
    color: var(--light-green-accent);
    font-size: 18px;
    text-decoration: none;
  }
}
</style>
