<script>
export default {
  props: {
    projectItem: {
      required: true,
      type: Object,
    },
  },

  data() {
    return {};
  },
};
</script>

<template>
  <div class="project">
    <RouterLink class="project__link" :to="'/projects/' + projectItem.id">
      <img class="project__image" :src="projectItem.imgUrls[0]" alt="" />
      <h4 class="project__title">{{ projectItem.title }}</h4>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.project {
  overflow: hidden;
  background-color: var(--dark-gray-bg);
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &__link {
    text-decoration: none;
    color: var(--white);
  }

  &__title {
    padding: 15px 10px;
  }
}
</style>
