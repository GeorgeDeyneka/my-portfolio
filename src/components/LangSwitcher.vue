<template>
  <div class="switcher">
    <div
      class="switcher__btn"
      @mouseenter="hoverChild"
      @mouseleave="hoverChild"
    >
      <a class="switcher__link">
        {{ currentLocale }}
      </a>

      <svg-icon
        string-path="#icon-arrow"
        :size="20"
        :class="{ hovered: isChildHover }"
        fill-color="var(--white)"
        hover-color="var(--light-green-accent)"
      />
    </div>

    <ul
      class="switcher__list"
      @mouseenter="hoverChild"
      @mouseleave="hoverChild"
    >
      <li
        v-for="lang of langs"
        v-show="currentLocale !== lang"
        :key="lang"
        class="switcher__item"
        @click="changeLocale(lang)"
      >
        <a class="switcher__link" target="_blank"> {{ lang }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
import SvgIcon from "./SvgIcon.vue";

export default {
  components: { SvgIcon },

  data() {
    return {
      langs: ["en", "ua"],
      isChildHover: false,
    };
  },

  computed: {
    currentLocale() {
      return this.$i18n.locale;
    },
  },

  methods: {
    changeLocale(lang) {
      this.$i18n.locale = lang;
      sessionStorage.setItem("lang", this.$i18n.locale);
    },

    hoverChild() {
      this.isChildHover = !this.isChildHover;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/base/variables.scss";

.switcher {
  border-radius: 4px;
  font-family: inherit;
  font-weight: 500;
  font-size: 18px;
  position: relative;
  display: flex;
  margin-bottom: 40px;
  max-width: fit-content;
  margin-left: -10px;

  @media #{$tablet} {
    margin-bottom: 0;
    margin-left: 0;
  }

  &:hover {
    border-radius: 4px 4px 0 0;
    transition: all 300ms ease-out;
    color: var(--light-green-accent);

    .switcher__list {
      display: flex;
    }

    .switcher__btn {
      &::before {
        display: block;
      }
    }
  }

  &__btn {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    gap: 10px;

    @media #{$tablet} {
      gap: 0;
      padding-right: 6px;
    }

    &::before {
      content: "";
      position: absolute;
      display: none;
      bottom: 0.5px;
      z-index: 2;
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      height: 1px;
      background-color: var(--light-green-accent);
    }
  }

  &__list {
    position: absolute;
    display: none;
    width: 100%;
    left: 0;
    top: calc(100% - 1px);
    margin: 0;
    list-style-type: none;
    padding: 0;
  }

  &__item {
    background-color: var(--light-gray-hover);
    border-radius: 0 0 4px 4px;
    width: 100%;
  }

  &__link {
    display: flex;
    text-transform: uppercase;
    align-items: center;
    display: inline-block;
    width: 100%;
    padding: 10px;
    cursor: pointer;
    user-select: none;
    font-size: 20px;

    @media #{$tablet} {
      padding: 4px 12px;
      font-size: 18px;
    }
  }

  .icon-svg {
    transform: rotate(180deg);
  }
}
</style>
