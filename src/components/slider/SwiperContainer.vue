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
    <SwiperSlide
      v-for="item of dataItem.imgUrls"
      :key="item"
      :image-height="minSlideHeight"
      :info-item="item"
    />
  </swiper-container>
</template>

<script setup>
import { register } from "swiper/element/bundle";
import { computed, ref } from "vue";
import { useScreenWidthStore } from "@/store/screenWidth";
import SwiperSlide from "@/components/slider/SwiperSlide.vue";

register();

defineProps({
  dataItem: {
    type: Object,
    required: true,
  },
});

const swiperStyles = ref({
  "--swiper-navigation-color": "var(--light-green-accent)",
  "--swiper-pagination-color": "var(--light-green-accent)",
  "--swiper-pagination-bullet-inactive-color": "var(--light-gray-text)",
  overflowX: "clip",
  overflowY: "visible",
});

const store = useScreenWidthStore();
const screenWidth = store.screenWidth;

const minSlideHeight = computed(() => {
  if (screenWidth >= 1200) {
    return 1200 * 0.4;
  }
  return screenWidth * 0.4;
});
</script>

<style lang="scss" scoped></style>
