<script>
import ContactList from "../components/ContactList.vue";
import { CONTACT_DATA } from "../data/contSvgData";

export default {
  components: {
    ContactList,
  },

  data() {
    return {
      contactData: CONTACT_DATA,
    };
  },
};
</script>

<template>
  <h1 class="cont__title">My Contacts</h1>

  <ContactList :arrData="contactData" />


</template>

<style lang="scss" scoped>
.cont {
  &__title {
    padding: 20px 0;
  }
}
</style>
