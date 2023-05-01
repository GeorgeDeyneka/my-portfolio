<script>
import SvgIcon from "../../components/icons/SvgIcon.vue";

export default {
  props: {
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
  },

  data() {
    return {
      isChildHover: false,
    };
  },

  methods: {
    hoverChild() {
      this.isChildHover = !this.isChildHover;
    },
  },

  components: { SvgIcon },
};
</script>

<template>
  <li class="cont__item" :class="{ 'item-padding': showTitle }">
    <a
      class="cont__link"
      :class="[showTitle ? 'item-column' : 'item-row']"
      :href="linkItem.link"
      target="_blank"
      @mouseenter="hoverChild"
      @mouseleave="hoverChild"
    >
      <SvgIcon
        :fillColor="fillColor"
        :class="{ hovered: isChildHover }"
        :hoverColor="hoverColor"
        :item="linkItem"
      />
      <h2 v-if="showTitle" class="cont__subtitle">{{ linkItem.title }}</h2>
    </a>
  </li>
</template>

<style lang="scss" scoped>
.item-padding {
  padding: 10px 0;
}

.item-column {
  &:hover {
    transition: background-color 300ms ease-out;
    background-color: var(--dark-gray-hover);
    border-radius: 4px;
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
  }

  &__subtitle {
    padding: 5px 10px;
    font-size: 16px;
    color: var(--white);
  }

  &__item {
    list-style: none;
  }
}

@media (min-width: 768px) {
  .cont {
    &__link {
      gap: 20px;
    }

    &__subtitle {
      font-size: 22.5px;
    }
  }
}
</style>
