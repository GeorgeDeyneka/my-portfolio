<script>
export default {
  data() {
    return {
      frameworksSvg: [
        {
          name: "angular",
          path: "icon-ang",
        },
        {
          name: "vue",
          path: "icon-vue",
        },
        {
          name: "rest",
          path: "icon-nest",
        },
      ],

      mainStackSvg: [
        {
          name: "js",
          path: "icon-js",
        },
        {
          name: "ts",
          path: "icon-ts",
        },
        {
          name: "html",
          path: "icon-html",
        },
        {
          name: "css",
          path: "icon-css",
        },
      ],
    };
  },
};
</script>

<template>
  <h1 class="tech__title">My Tech stack:</h1>

  <h2>Frameworks:</h2>
  <ul class="tech__logos">
    <li class="tech__item" v-for="item of frameworksSvg" :key="item">
      <svg class="icon-svg">
        <use :href="'src/assets/images/sprite.svg#' + item.path"></use>
      </svg>
    </li>
  </ul>

  <h2>Main Stack:</h2>
  <ul class="tech__logos">
    <li class="tech__item" v-for="item of mainStackSvg" :key="item">
      <svg class="icon-svg">
        <use :href="'src/assets/images/sprite.svg#' + item.path"></use>
      </svg>
    </li>
  </ul>
</template>

<!-- Make this reusable component? -->
<!-- Separate data in other file? -->

<style lang="scss" scoped>
.tech {
  &__title {
    padding: 20px 0;
  }

  &__item {
    list-style: none;
  }

  &__logos {
    display: flex;
    gap: 30px;
    padding: 20px 0;
  }
}

.icon-svg {
  fill: #aaa;
  display: block;
  width: 100px;
  height: 100px;
}
</style>
