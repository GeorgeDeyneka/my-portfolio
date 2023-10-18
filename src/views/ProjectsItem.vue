<template>
  <li class="project">
    <RouterLink class="project__link" :to="'/projects/' + projectItem.id">
      <img
        class="project__image"
        :src="projectItem.imgUrls[0].url"
        alt=""
        @load="onImageLoad"
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
  </li>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  projectItem: {
    required: true,
    type: Object,
  },
});

const showTitle = ref(false);

const onImageLoad = () => {
  showTitle.value = true;
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base/keyframes.scss";
@import "@/assets/styles/base/variables.scss";

.project {
  position: relative;
  min-height: 228px;
  overflow: hidden;
  background-color: var(--dark-gray-bg);
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);

    .pop-up {
      @media #{$desktop} {
        transform: translateY(0%);
      }
    }
  }

  &__image {
    min-height: 170px;
  }

  &__link {
    text-decoration: none;
    color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
  }

  &__info {
    padding: 15px 10px;
    position: relative;
    width: 100%;
    flex: 1;

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

  @media #{$desktop} {
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
  }

  &__text {
    color: var(--light-gray-text);
  }
}
</style>
