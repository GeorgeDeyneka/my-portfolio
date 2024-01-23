<template>
  <main class="wrapper">
    <section class="contacts">
      <h2>{{ $t("contacts.title") }}</h2>

      <ContactsList :arr-data="contacts" />
    </section>
  </main>
</template>

<script setup>
import ContactsList from "@/views/ContactsList.vue";
import { contacts } from "@/lang/data";
</script>

<style lang="scss" scoped></style>
