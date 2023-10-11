<template>
  <ul class="contacts__list">
    <ContactItem v-for="item of arrData" :linkItem="item" :key="item" />
  </ul>
</template>

<script>
import ContactItem from "@/components/ContactItem.vue";

export default {
  props: {
    arrData: {
      type: Array,
      required: true,
    },
  },

  components: {
    ContactItem,
  },
};
</script>

<style lang="scss" scoped>
.contacts {
  &__list {
    padding: 20px 0;
  }
}
</style>
