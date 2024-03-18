<template>
  <main class="wrapper">
    <StackDesc :text-list="$tm('tech.stack.desc')" />

    <section class="tech__experience experience">
      <h3 class="experience__subtitle green-subtitle">
        {{ $t("tech.exp.subtitle") }}
      </h3>

      <h2>{{ $t("tech.exp.title") }}</h2>

      <StackList
        v-for="item of stack"
        :key="item"
        :icon-size="iconSize"
        :title="item.title"
        :arr-data="item.data"
      />
    </section>
  </main>
</template>

<script setup>
import StackList from "@/views/StackList.vue";
import StackDesc from "@/views/StackDesc.vue";
import { stack } from "@/lang/data";
import { useScreenWidthStore } from "@/store/screenWidth";
import { computed } from "vue";

const store = useScreenWidthStore();

const screenWidth = computed(() => store.screenWidth);

const iconSize = computed(() => {
  return screenWidth.value < 768 ? 70 : 100;
});
</script>

<style lang="scss" scoped>
.experience {
  padding: 60px 0;
}
</style>
