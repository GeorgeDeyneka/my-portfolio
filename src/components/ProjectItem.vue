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
    <RouterLink class="project__link" to="/">
      <img class="project__image" :src="projectItem.imgUrls[0]" alt="" />
      <h3 class="project__title">{{ projectItem.title }}</h3>

      <!-- <div class="marquee__wrapper">
          <div class="marquee">
            <span class="marquee__text">HTML</span>
            <span class="marquee__text">SCSS</span>
            <span class="marquee__text">Angular</span>
            <span class="marquee__text">REST</span>
          </div>
        </div> -->
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

// .marquee {
//   display: flex;
//   white-space: nowrap;
//   text-decoration: none;
//   overflow: hidden;
//   animation: marquee 25s linear infinite;
//   direction: rtl;
//   color: #000;
//   align-items: center;
//   justify-content: center;

//   &::before,
//   &::after {
//     content: "•";
//     margin: 0 5px;
//   }

//   &__wrapper {
//     z-index: -1;
//     background-color: #00bb67;
//   }

//   &__text {
//     color: #000;
//     font-weight: 500;

//     &:not(:last-child)::after {
//       content: "•";
//       margin: 0 5px;
//     }
//   }
// }

// @keyframes marquee {
//   0% {
//     transform: translateX(100%);
//   }
//   100% {
//     transform: translateX(-100%);
//   }
// }
</style>
