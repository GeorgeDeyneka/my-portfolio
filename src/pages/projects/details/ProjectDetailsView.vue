<script>
import { useStore } from "vuex";
import router from "@/router";

export default {
  data() {
    return {
      store: useStore(),
    };
  },

  methods: {
    checkItemAndRedirect(resp) {
      if (resp === null) {
        return router.push({ name: "404-page" });
      }
    },
  },

  computed: {
    dataItem() {
      return this.store.state.item;
    },
  },

  mounted() {
    this.$store
      .dispatch("fetchItem", Number(this.$route.params.id))
      .then((resp) => {
        this.checkItemAndRedirect(resp);
      });
  },
};
</script>

<template>
  <div class="wrapper">
    <h1>{{ dataItem.title }}</h1>
    <p class="project__text">{{ dataItem.shortDesc }}</p>
  </div>
</template>

<style lang="scss" scoped>
.project {
  &__text {
    padding: 40px 0;
    max-width: 600px;
  }
}
</style>
