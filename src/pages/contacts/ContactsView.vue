<script>
import ContactList from "./ContactList.vue";
import { CONTACTS_LINKS } from "../../data/contactsData";

export default {
  components: {
    ContactList,
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
    <h1 class="cont__title">My Contacts</h1>

    <ContactList :arrData="contactData" />
  </div>
</template>

<style lang="scss" scoped>
.cont {
  &__title {
    padding: 20px 0;
  }
}
</style>
