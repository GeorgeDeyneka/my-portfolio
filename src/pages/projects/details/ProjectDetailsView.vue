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
      swiperStyles: {
        "--swiper-navigation-color": "var(--light-green-accent)",
        "--swiper-pagination-color": "var(--light-green-accent)",
        "--swiper-pagination-bullet-inactive-color": "var(--light-gray-text)",
        overflowX: "clip",
        overflowY: "visible",
      },
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

    <swiper-container
      :style="swiperStyles"
      :spaceBetween="50"
      :keyboard="{
        enabled: true,
      }"
      lazy="true"
      :navigation="true"
    >
      <!-- :pagination="{
        clickable: true,
      }" -->
      <swiper-slide v-for="item of dataItem.imgUrls" lazy="true">
        <div class="project__slide slide">
          <img
            class="slide__image"
            :src="item.url"
            alt="project-demo"
            loading="lazy"
          />
          <div class="slide__description">
            <ul class="slide__list">
              <li class="slide__item" v-for="text of item.description">
                {{ text }}
              </li>
            </ul>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
    <div class="project__references">
      <h2>Live page:</h2>
      <a class="project__link" :href="dataItem.liveUrl">{{
        dataItem.liveUrl
      }}</a>
    </div>
    <div class="project__references">
      <h2>Repository page:</h2>
      <a class="project__link" :href="dataItem.repoUrl">{{
        dataItem.repoUrl
      }}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project {
  &__text {
    padding: 40px 0;
    max-width: 600px;
  }

  &__references {
    margin: 30px 0;
  }

  &__link {
    color: var(--white);
    text-decoration: none;
  }
}
.slide {
  background-color: var(--dark-gray-swiper-bg);
  margin: 50px 0;

  &__description {
    position: relative;
    min-height: 86px;
  }

  &__list {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    margin: 25px 0;
    padding: 0 30px 10px;
    border-radius: 4px;
    overflow: hidden;
    max-height: 68px;
    background-color: var(--dark-gray-swiper-bg);
    transition: max-height 300ms ease-out;

    &:hover {
      max-height: 200px;
      overflow: auto;
    }
  }

  &__item {
    padding: 5px 0;
    font-size: 17px;
    color: var(--gray-text);
  }
}

@media (min-width: 768px) {
  .slide {
    margin: 35px 60px;
    border-radius: 4px;
    min-height: auto;
    padding: 10px 0;

    &__image {
      padding: 0 10px;
    }
  }
}
</style>
