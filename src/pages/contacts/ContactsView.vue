<script>
import ContactsList from "./ContactsList.vue";
import { CONTACTS_LINKS } from "../../data/contactsData";

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

<template>
  <div class="wrapper">
    <h1>My Contacts</h1>

    <ContactsList :arrData="contactData" />
  </div>
</template>

<style lang="scss" scoped></style>
