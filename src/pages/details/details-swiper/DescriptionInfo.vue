<script>
import ButtonShowFullText from "@/components/buttons/ButtonShowFullText.vue";

export default {
  props: {
    textData: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      showTextFlag: false,
    };
  },

  methods: {
    showFullDescription() {
      return (this.showTextFlag = !this.showTextFlag);
    },
  },

  components: {
    ButtonShowFullText,
  },
};
</script>

<template>
  <div class="description">
    <div
      class="description__wrapper"
      :class="showTextFlag ? 'full-list' : 'short-list'"
    >
      <ul class="list">
        <li class="list__item" v-for="(text, index) of textData">
          <span class="list__hint" v-if="!showTextFlag && index === 0"
            >(Click on the arrow and scroll)</span
          >
          {{ text }}
        </li>
      </ul>
      <ButtonShowFullText class="list__btn-show" @click="showFullDescription" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.description {
  position: relative;
  min-height: 16px;

  &__wrapper {
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

.list {
  padding: 0 10px;
  margin: 0;

  &__item {
    padding: 5px 0;
    font-size: 17px;
    color: var(--gray-text);
  }

  &__hint {
    color: var(--light-green-accent);
  }

  &__btn-show {
    position: absolute;
    right: 10px;
    top: 2px;
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
  .description {
    min-height: 56px;

    &__wrapper {
      margin-bottom: 25px;
      padding: 2px 55px 10px 30px;
      min-height: 68px;
    }
  }
}
</style>
