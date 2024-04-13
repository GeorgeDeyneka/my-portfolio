<template>
  <li class="projects__card card">
    <RouterLink :to="`/projects/${route}`">
      <AppSvgIcon
        :string-path="iconPath"
        class="card__icon"
        :size="screenWidth < 768 ? 100 : 150"
        fill-color="var(--light-gray-text)"
      />

      <div class="card__content">
        <h3 class="card__subtitle">{{ title }}</h3>

        <p class="card__desc">{{ desc }}</p>
      </div>
    </RouterLink>
  </li>
</template>

<script setup>
import AppSvgIcon from "@/components/AppSvgIcon.vue";
import { useScreenWidthStore } from "@/store/screenWidth";
import { computed } from "vue";

defineProps({
  title: {
    required: true,
    type: String,
  },
  desc: {
    required: true,
    type: String,
  },
  iconPath: {
    required: true,
    type: String,
  },
  route: {
    required: true,
    type: String,
  },
});

const store = useScreenWidthStore();
const screenWidth = computed(() => store.screenWidth);
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base/variables.scss";

.card {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 15px;
  gap: 20px;
  background-color: var(--dark-gray-bg);
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;

  & > a {
    text-decoration: none;
  }

  @media #{$tablet} {
    padding: 30px 20px;
    justify-content: space-between;
  }

  @media #{$desktop-sm} {
    flex-direction: column;
  }

  @media (hover: hover) {
    &:hover {
      transform: scale(1.05);
    }
  }

  @media (hover: none) {
    &:active {
      transform: scale(1.05);
    }
  }

  &__subtitle {
    font-size: 20px;
    padding-top: 5px;
    color: var(--white);
  }

  &__icon {
    margin: 20px 0;

    @media #{$tablet} {
      margin: 20px auto;
    }
  }
}
</style>
