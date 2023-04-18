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
      <h3 class="project__title">{{ projectItem.title }}</h3>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.project {
  overflow: hidden;
  background-color: #171717;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &__link {
    text-decoration: none;
    color: #fff;
  }

  &__title {
    font-size: 18px;
    padding: 10px;
  }
}
</style>
