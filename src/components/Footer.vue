<script>
import { CONTACTS_LINKS } from "../data/contactsData";
import ContactsList from "../pages/contacts/ContactsList.vue";
import ButtonLink from "./buttons/ButtonLink.vue";

export default {
  data() {
    return {
      contactData: CONTACTS_LINKS,
    };
  },
  components: {
    ButtonLink,
    ContactsList,
  },
};
</script>

<template>
  <footer class="footer">
    <div class="container">
      <p class="footer__item text">
        Developed by <strong>George Deyneka</strong> with <strong>Vue 3</strong>
      </p>

      <div class="footer__item network">
        <ContactsList
          fillColor="#c3c3c3"
          hoverColor="#75fa7f"
          :showTitle="false"
          :arrData="contactData"
          class="network__list"
        />
      </div>

      <div class="footer__item hire-btn">
        <ButtonLink text="Hire Me Now!" link="#" />
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  color: var(--gray-text);
  background-color: var(--dark-gray-bg);

  .network {
    &__list {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      margin: 0;
      padding: 0;
    }
  }
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

@media (min-width: 1200px) {
  .footer {
    &__item {
      min-width: 280px;
    }

    .text {
      max-width: 280px;
    }

    .hire-btn {
      display: flex;
      justify-content: center;
    }
  }
  .container {
    padding: 10px 0;
  }
}
</style>
