<script>
export default {
  props: {
    projectItem: {
      required: true,
      type: Object,
    },
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

  &__link {
    text-decoration: none;
    color: #fff;
  }

  &__title {
    font-size: 18px;
    padding: 5px;
  }
}
</style>
