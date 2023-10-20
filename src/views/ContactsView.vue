<template>
  <div class="wrapper">
    <h1>{{ $t("contacts.title") }}</h1>

    <ContactsList :arr-data="contacts" />
  </div>
</template>

<script setup>
import ContactsList from "@/views/ContactsList.vue";
import { contacts } from "@/lang/data";
</script>

<style lang="scss" scoped></style>
