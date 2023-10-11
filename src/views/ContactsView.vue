<template>
  <div class="wrapper">
    <h1>My Contacts</h1>

    <ContactsList :arrData="contactData" />
  </div>
</template>

<script>
import ContactsList from "@/views/ContactsList.vue";
import { CONTACTS_LINKS } from "@/data/contactsData";

export default {
  components: {
    ContactsList,
  },

  data() {
    return {
      contactData: CONTACTS_LINKS,
    };
  },
};
</script>

<style lang="scss" scoped></style>
