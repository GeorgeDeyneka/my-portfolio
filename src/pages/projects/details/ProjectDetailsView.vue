<script>
import { useStore } from "vuex";
import { defineComponent, computed } from "vue";
import router from "@/router";

export default defineComponent({
  setup() {
    const store = useStore();

    return {
      dataItem: computed(() => store.state.item),
    };
  },

  methods: {
    checkItemAndRedirect(resp) {
      if (resp === null) {
        return router.push({ name: "404-page" });
      }
    },
  },

  mounted() {
    this.$store
      .dispatch("fetchItem", Number(this.$route.params.id))
      .then((resp) => {
        this.checkItemAndRedirect(resp);
      });
  },
});
</script>

<template>
  <h1>Details Page # {{ $route.params.id }}</h1>
  <p>{{ dataItem.title }}</p>
</template>

<style lang="scss" scoped></style>
