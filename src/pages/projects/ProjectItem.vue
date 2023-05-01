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
      showTitle: false,
    };
  },

  methods: {
    onImageLoad() {
      this.showTitle = true;
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
        <h4 v-if="showTitle">{{ projectItem.title }}</h4>
        <div v-else class="project__skeleton"></div>
        <div v-if="showTitle" class="pop-up">
          <p class="pop-up__text">
            {{ projectItem.shortDesc }}
          </p>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/keyframes.scss";
.project {
  position: relative;
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
    position: relative;

    & > h4 {
      padding: 0;
    }
  }

  &__skeleton {
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

.pop-up {
  display: none;
}

@media (min-width: 1200px) {
  .project {
    &:hover {
      .pop-up {
        transform: translateY(0%);
      }
    }
  }

  .pop-up {
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
    max-height: 150px;
    background-color: var(--black-pop-up-bg);
    padding: 10px;
    transform: translateY(100%);
    transition: transform 0.3s ease;

    &__text {
      color: var(--light-gray-text);
    }
  }
}
</style>
