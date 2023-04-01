<script>
import { RouterView } from "vue-router";
import HeaderVue from "../components/Header.vue";

export default {
  components: {
    HeaderVue,
    RouterView,
  },
};
</script>

<template>
  <HeaderVue />
  <RouterView />
</template>
