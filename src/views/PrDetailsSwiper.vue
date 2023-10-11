<template>
  <swiper-container
    :style="swiperStyles"
    :space-between="50"
    :keyboard="{
      enabled: true,
    }"
    lazy="true"
    :navigation="true"
  >
    <PrDetailsSlide
      v-for="item of dataItem.imgUrls"
      :key="item"
      :image-height="minSlideHeight"
      :info-item="item"
    />
  </swiper-container>
</template>

<script>
import { mapGetters } from "vuex";
import { register } from "swiper/element/bundle";
import PrDetailsSlide from "@/views/PrDetailsSlide.vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

register();

export default {
  components: {
    PrDetailsSlide,
  },

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

  computed: {
    ...mapGetters(["screenWidth"]),
    minSlideHeight() {
      if (this.screenWidth >= 1200) {
        return 1200 * 0.4;
      }
      return this.screenWidth * 0.4;
    },
  },
};
</script>

<style lang="scss" scoped></style>
