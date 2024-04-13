<template>
  <main class="wrapper">
    <section class="contacts">
      <div class="contacts__title">
        <AppButtonBack />
        <h2>{{ $t("contacts.title") }}</h2>
      </div>

      <ContactsList :arr-data="contacts" />
    </section>
  </main>
</template>

<script setup>
import ContactsList from "@/views/ContactsList.vue";
import AppButtonBack from "@/components/AppButtonBack.vue";
import { contacts } from "@/lang/data";
</script>

<style lang="scss" scoped>
.contacts {
  &__title {
    display: flex;
    align-items: center;
    gap: 30px;
  }
}
</style>
