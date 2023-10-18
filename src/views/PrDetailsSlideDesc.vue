<template>
  <div class="description">
    <div
      class="description__wrapper"
      :class="showTextFlag ? 'full-list' : 'short-list'"
      @click="handleClick"
    >
      <ul class="list">
        <li v-for="(text, index) of textData" :key="index" class="list__item">
          <span v-if="!showTextFlag && index === 0" class="list__hint"
            >(Click and scroll)</span
          >
          {{ text }}
        </li>
      </ul>

      <ButtonShowText
        ref="btn-show"
        class="list__btn-show"
        @click.stop="showFullDescription"
      />
    </div>
  </div>
</template>

<script>
import ButtonShowText from "@/components/ButtonShowText.vue";

export default {
  components: {
    ButtonShowText,
  },

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
    handleClick() {
      this.$refs["btn-show"].$el.click();
    },

    showFullDescription() {
      this.showTextFlag = !this.showTextFlag;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base/variables.scss";

.description {
  position: relative;
  min-height: 16px;

  @media #{$tablet} {
    min-height: 56px;
  }

  &__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    border: 1px solid var(--gray-skeleton);
    border-top: none;
    padding: 0 55px 0px 20px;
    border-radius: 0 0 4px 4px;
    cursor: pointer;
    overflow: hidden;
    max-height: 60px;
    background-color: var(--dark-gray-swiper-bg);
    transition: max-height 300ms ease-in;
    min-width: 100%;

    @media #{$tablet} {
      margin-bottom: 25px;
      padding: 2px 55px 10px 30px;
      min-height: 68px;
    }
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
    z-index: 12;
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
</style>
