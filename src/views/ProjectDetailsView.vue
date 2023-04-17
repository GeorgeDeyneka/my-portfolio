<script>
import { useStore } from "vuex";
import { defineComponent, computed } from "vue";

export default defineComponent({
  setup() {
    const store = useStore();

    return {
      dataItem: computed(() => store.state.item),
    };
  },

  mounted() {
    this.$store.dispatch("fetchItem", this.$route.params.id);
  },
});
</script>

<template>
  <h1>Details Page # {{ $route.params.id }}</h1>
  <p>{{ dataItem.title }}</p>
</template>

<style lang="scss" scoped></style>
