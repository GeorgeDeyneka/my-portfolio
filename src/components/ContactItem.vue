<template>
  <li class="contact__item" :class="{ padding: isShowTitle }">
    <a
      class="contact__link"
      :class="[isShowTitle ? 'column' : 'row']"
      :href="linkItem.link"
      target="_blank"
      :aria-label="linkItem.name"
      @mouseenter="onHoverChild"
      @mouseleave="onHoverChild"
    >
      <AppSvgIcon
        :fill-color="fillColor"
        :class="{ hovered: isChildHover }"
        :hover-color="hoverColor"
        :string-path="linkItem.path"
      />
      <h2 v-if="isShowTitle" class="contact__subtitle">{{ linkItem.title }}</h2>
    </a>
  </li>
</template>

<script setup>
import AppSvgIcon from "@/components/AppSvgIcon.vue";
import { ref } from "vue";

defineProps({
  linkItem: {
    required: true,
    type: Object,
  },

  isShowTitle: {
    type: Boolean,
    default: true,
  },

  fillColor: {
    type: String,
    default: "var(--white)",
  },

  hoverColor: {
    type: String,
    default: "",
  },
});

const isChildHover = ref(false);

const onHoverChild = () => (isChildHover.value = !isChildHover.value);
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base/variables.scss";

.contact {
  &__link {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px;
    text-decoration: none;
    max-width: fit-content;

    @media #{$tablet} {
      gap: 20px;
    }

    &.column {
      @media (hover: hover) {
        &:hover {
          transition: background-color 300ms ease-out;
          background-color: var(--dark-gray-hover);
          border-radius: 4px;
        }
      }

      @media (hover: none) {
        &:active {
          transition: background-color 300ms ease-out;
          background-color: var(--dark-gray-hover);
          border-radius: 4px;
        }
      }
    }
  }

  &__subtitle {
    padding: 5px 10px;
    font-size: 16px;
    color: var(--white);

    @media #{$tablet} {
      font-size: 22.5px;
    }
  }

  &__item {
    list-style: none;

    &.padding {
      padding: 6px 0;
    }
  }
}
</style>
