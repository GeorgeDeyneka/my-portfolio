<template>
  <main class="wrapper">
    <section class="contacts">
      <div class="contacts__title">
        <ButtonBack />
        <h2>{{ $t("contacts.title") }}</h2>
      </div>

      <ContactsList :arr-data="contacts" />
    </section>
  </main>
</template>

<script setup>
import ContactsList from "@/views/ContactsList.vue";
import ButtonBack from "@/components/ButtonBack.vue";
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
