<script>
import ContactItem from "../../components/contact-item/ContactItem.vue";

export default {
  props: {
    arrData: {
      type: Array,
      required: true,
    },
  },

  components: {
    ContactItem,
    ContactItem
},
};
</script>

<template>
  <ul class="contacts__list">
    <ContactItem v-for="item of arrData" :linkItem="item" :key="item" />
  </ul>
</template>

<style lang="scss" scoped>
.contacts {
  &__list {
    padding: 20px 0;
  }
}
</style>
