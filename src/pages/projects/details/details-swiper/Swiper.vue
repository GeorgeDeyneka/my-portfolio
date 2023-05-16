<script>
import SwiperSlide from "./SwiperSlide.vue";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

register();

export default {
  props: {
    dataItem: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      swiperStyles: {
        "--swiper-navigation-color": "var(--light-green-accent)",
        "--swiper-pagination-color": "var(--light-green-accent)",
        "--swiper-pagination-bullet-inactive-color": "var(--light-gray-text)",
        overflowX: "clip",
        overflowY: "visible",
      },
    };
  },

  components: {
    SwiperSlide,
  },
};
</script>

<template>
  <swiper-container
    :style="swiperStyles"
    :spaceBetween="50"
    :keyboard="{
      enabled: true,
    }"
    lazy="true"
    :navigation="true"
  >
    <SwiperSlide v-for="item of dataItem.imgUrls" :infoItem="item" />
  </swiper-container>
</template>

<style lang="scss" scoped></style>
