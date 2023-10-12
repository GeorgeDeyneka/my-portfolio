<script setup>
import { useI18n } from "vue-i18n";
import SvgSprite from "@/views/SvgSprite.vue";

/* eslint-disable no-unused-vars */
const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <div class="app">
    <RouterView />
    <SvgSprite />
  </div>
</template>

<style lang="scss"></style>
