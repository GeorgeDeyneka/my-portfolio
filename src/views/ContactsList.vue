<template>
  <ul class="contacts__list">
    <ContactItem
      v-for="item of arrData"
      :key="item"
      :hover-color="item.hoverColor"
      :link-item="item"
    />
  </ul>
</template>

<script>
import ContactItem from "@/components/ContactItem.vue";

export default {
  components: {
    ContactItem,
  },

  props: {
    arrData: {
      type: Array,
      required: true,
    },
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
