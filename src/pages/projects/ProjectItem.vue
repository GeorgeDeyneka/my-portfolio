<script>
export default {
  props: {
    projectItem: {
      required: true,
      type: Object,
    },
  },

  data() {
    return {
      showComponent: false,
    };
  },

  methods: {
    onImageLoad() {
      this.showComponent = true;
    },
  },
};
</script>

<template>
  <div class="project">
    <RouterLink class="project__link" :to="'/projects/' + projectItem.id">
      <img
        class="project__image"
        :src="projectItem.imgUrls[0]"
        @load="onImageLoad"
        alt=""
      />
      <div class="project__info">
        <h4 v-if="showComponent">{{ projectItem.title }}</h4>
        <div v-else class="skeleton__title"></div>
      </div>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/keyframes.scss";

.skeleton {
  &__title {
    position: relative;
    min-height: 27px;
    width: 100%;
    background-color: var(--gray-skeleton);
    animation: pulse 2500ms ease-in-out infinite;

    &::after {
      content: "";
      position: absolute;
      display: block;
      bottom: -6px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--gray-skeleton);
    }
  }
}
.project {
  min-height: 228px;
  overflow: hidden;
  background-color: var(--dark-gray-bg);
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &__image {
    min-height: 170px;
  }

  &__link {
    text-decoration: none;
    color: var(--white);
  }

  &__info {
    padding: 15px 10px;

    & > h4 {
      padding: 0;
    }
  }
}
</style>
