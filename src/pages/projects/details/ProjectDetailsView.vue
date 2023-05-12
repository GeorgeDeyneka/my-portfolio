<script>
import { useStore } from "vuex";
import router from "@/router";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

register();

export default {
  setup() {
    const onProgress = (e) => {
      const [swiper, progress] = e.detail;
    };

    const onSlideChange = (e) => {};

    return {
      onProgress,
      onSlideChange,
    };
  },

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

    <div class="container__swiper">
      <swiper-container
        :spaceBetween="50"
        :keyboard="{
          enabled: true,
        }"
        lazy="true"
        :style="{
          '--swiper-navigation-color': 'var(--light-green-accent)',
          '--swiper-pagination-color': 'var(--light-green-accent)',
          '--swiper-pagination-bullet-inactive-color': 'var(--light-gray-text)',
        }"
        :pagination="{
          clickable: true,
        }"
        class="mySwiper"
        :navigation="true"
      >
        <swiper-slide v-for="item of dataItem.imgUrls" lazy="true">
          <div class="project__slide slide">
            <img
              class="slide__image"
              :src="item.url"
              alt="project-demo"
              loading="lazy"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              rem laboriosam aut perferendis commodi? Assumenda fugiat animi
              quasi non asperiores? Praesentium, reprehenderit? Possimus est
              unde blanditiis, placeat architecto dicta. Totam.
            </p>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project {
  &__text {
    padding: 40px 0;
    max-width: 600px;
  }
}

.slide {
  background-color: var(--dark-gray-swiper-bg);
  margin: 50px 0;

  &__image {
    min-height: calc(100% * 0.54);
  }
}

@media (min-width: 768px) {
  .slide {
    margin: 35px 60px;
    border-radius: 4px;
    min-height: auto;
    padding: 10px;
  }
}
</style>
