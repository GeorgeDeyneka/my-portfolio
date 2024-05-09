<template>
  <div class="switcher" :class="{ active: isOpen }">
    <button
      class="switcher__btn"
      @mouseenter="onHoverChild"
      @mouseleave="onHoverChild"
      @click="toggleSwitcher"
    >
      <p class="switcher__option">
        {{ currentLocale }}
      </p>

      <AppSvgIcon
        string-path="#icon-arrow"
        :size="20"
        :class="{ hovered: isChildHover || isOpen }"
        fill-color="var(--white)"
        hover-color="var(--light-green-accent)"
      />
    </button>

    <ul
      class="switcher__list"
      @mouseenter="onHoverChild"
      @mouseleave="onHoverChild"
    >
      <li
        v-for="lang of langs"
        v-show="currentLocale !== lang"
        :key="lang"
        class="switcher__item"
        @click="changeLocale(lang)"
      >
        <p class="switcher__option">{{ lang }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import AppSvgIcon from "@/components/AppSvgIcon.vue";

const isOpen = ref(false);
const langs = ref(["en", "ua"]);
const isChildHover = ref(false);
const { locale } = useI18n();

const currentLocale = computed(() => locale.value);

const toggleSwitcher = () => {
  isOpen.value = !isOpen.value;
};

const changeLocale = (lang) => {
  locale.value = lang;
  sessionStorage.setItem("lang", locale.value);
  toggleSwitcher();
};

const onHoverChild = () => (isChildHover.value = !isChildHover.value);
</script>

<style lang="scss">
@import "@/assets/styles/base/variables.scss";

.switcher {
  font-family: inherit;
  font-weight: 500;
  font-size: 18px;
  position: relative;
  display: flex;
  margin-bottom: 40px;
  max-width: fit-content;
  margin-left: -10px;
  border-radius: 4px 4px 0 0;

  @media #{$tablet} {
    margin-bottom: 0;
    margin-left: 0;
  }

  @media (hover: hover) {
    &:hover {
      .switcher {
        &__list {
          display: flex;
        }

        &__btn:before {
          display: block;
        }

        &__option {
          transition: all 300ms ease-out;
          color: var(--light-green-accent);
        }
      }
    }
  }

  @media (hover: none) {
    &.active {
      .switcher {
        &__list {
          display: flex;
        }

        &__btn:before {
          display: block;
        }

        &__option {
          transition: all 300ms ease-out;
          color: var(--light-green-accent);
        }
      }
    }
  }

  &__btn {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    gap: 10px;
    background-color: transparent;
    border: none;

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

  &__option {
    display: flex;
    text-transform: uppercase;
    align-items: center;
    display: inline-block;
    width: 100%;
    padding: 10px;
    cursor: pointer;
    user-select: none;
    font-size: 20px;
    color: var(--white);
    line-height: 175%;

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
