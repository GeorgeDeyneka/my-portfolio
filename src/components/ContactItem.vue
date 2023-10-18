<template>
  <li class="cont__item" :class="{ 'item-padding': showTitle }">
    <a
      class="cont__link"
      :class="[showTitle ? 'item-column' : 'item-row']"
      :href="linkItem.link"
      target="_blank"
      @mouseenter="onHoverChild"
      @mouseleave="onHoverChild"
    >
      <SvgIcon
        :fill-color="fillColor"
        :class="{ hovered: isChildHover }"
        :hover-color="hoverColor"
        :string-path="linkItem.path"
      />
      <h2 v-if="showTitle" class="cont__subtitle">{{ linkItem.title }}</h2>
    </a>
  </li>
</template>

<script setup>
import SvgIcon from "@/components/SvgIcon.vue";
import { ref } from "vue";

defineProps({
  linkItem: {
    required: true,
    type: Object,
  },

  showTitle: {
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

.item-padding {
  padding: 6px 0;
}

.item-column {
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

.cont {
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
  }
}
</style>
