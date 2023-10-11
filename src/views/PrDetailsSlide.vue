<script>
import PrDetailsSlideDesc from "@/views/PrDetailsSlideDesc.vue";

export default {
  props: {
    infoItem: {
      type: Object,
      required: true,
    },

    imageHeight: {
      type: Number,
      required: true,
    },
  },

  components: {
    PrDetailsSlideDesc,
  },
};
</script>

<template>
  <swiper-slide lazy="true">
    <div class="slide">
      <img
        class="slide__image"
        :src="infoItem.url"
        :style="{ 'min-height': `${imageHeight}px` }"
        alt="project-demo"
        loading="lazy"
      />
      <PrDetailsSlideDesc :textData="infoItem.description" />
    </div>
  </swiper-slide>
</template>

<style lang="scss" scoped>
.slide {
  background-color: var(--dark-gray-swiper-bg);
  margin: 50px 0;

  &__image {
    border-radius: 4px 4px 0 0;
    border: 1px solid var(--gray-skeleton);
    border-bottom: none;
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
  }
}
</style>
