<script>
import { useStore } from "vuex";
import router from "@/router";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import ButtonShowFullText from "@/components/buttons/ButtonShowFullText.vue";

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
      showTextFlag: false,
    };
  },

  methods: {
    checkItemAndRedirect(resp) {
      if (resp === null) {
        return router.push({ name: "404-page" });
      }
    },

    showFullDescription() {
      return (this.showTextFlag = !this.showTextFlag);
    },
  },

  computed: {
    dataItem() {
      return this.store.state.item;
    },
  },

  components: {
    ButtonShowFullText,
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
      <swiper-slide v-for="item of dataItem.imgUrls" lazy="true">
        <div class="project__slide slide">
          <img
            class="slide__image"
            :src="item.url"
            alt="project-demo"
            loading="lazy"
          />
          <div class="slide__description">
            <div
              class="slide__list-wrapper"
              :class="showTextFlag ? 'full-list' : 'short-list'"
            >
              <ul class="slide__list">
                <li
                  class="slide__item"
                  v-for="(text, index) of item.description"
                >
                  <span
                    class="slide__item-hint"
                    v-if="!showTextFlag && index === 0"
                    >(Click on the arrow and scroll)</span
                  >
                  {{ text }}
                </li>
              </ul>
              <ButtonShowFullText
                class="slide__show-btn"
                @click="showFullDescription"
              />
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>

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

.slide {
  background-color: var(--dark-gray-swiper-bg);
  margin: 50px 0;

  &__description {
    position: relative;
    min-height: 16px;
  }

  &__image {
    border-radius: 4px 4px 0 0;
    border: 1px solid var(--gray-skeleton);
    border-bottom: none;
  }

  &__show-btn {
    position: absolute;
    right: 10px;
    top: 2px;
  }

  &__list {
    padding: 0 10px;
    margin: 0;

    &-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1000;
      border: 1px solid var(--gray-skeleton);
      border-top: none;
      padding: 0 55px 0px 20px;
      border-radius: 0 0 4px 4px;
      overflow: hidden;
      max-height: 60px;
      background-color: var(--dark-gray-swiper-bg);
      transition: max-height 300ms ease-in;
    }
  }

  &__item {
    padding: 5px 0;
    font-size: 17px;
    color: var(--gray-text);

    &-hint {
      color: var(--light-green-accent);
    }
  }
}

.full-list {
  display: block;
  max-height: 200px;
  overflow: auto;
}

.short-list {
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    pointer-events: none;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.9) 100%
    );
  }
}

@media (min-width: 768px) {
  .slide {
    margin: 35px 60px;
    border-radius: 4px;
    min-height: auto;

    &__image {
      padding: 10px 0;
    }

    &__description {
      min-height: 56px;
    }

    &__list {
      &-wrapper {
        margin-bottom: 25px;
        padding: 2px 55px 10px 30px;
        min-height: 68px;
      }
    }
  }
}
</style>
