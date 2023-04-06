<script>
import ContactList from "../components/ContactList.vue";
import { SPRITE_PATH, CONTACT_DATA } from "../data/contSvgData";

export default {
  components: {
    ContactList,
  },

  data() {
    return {
      url: SPRITE_PATH,
      contactData: CONTACT_DATA,
    };
  },
};
</script>

<template>
  <h1 class="cont__title">My Contacts</h1>

  <ContactList :arrData="contactData" :basePath="url" />


</template>

<style lang="scss" scoped>
.cont {
  &__title {
    padding: 20px 0;
  }
}
</style>
