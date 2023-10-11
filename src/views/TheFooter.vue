<template>
  <footer class="footer">
    <div class="container">
      <p class="footer__item text">
        Developed by <strong>George Deyneka</strong> with <strong>Vue 3</strong>
      </p>

      <ul class="footer__item network">
        <ContactItem
          fillColor="#c3c3c3"
          hoverColor="#75fa7f"
          :showTitle="false"
          v-for="item of contactData"
          :key="item"
          :linkItem="item"
        />
      </ul>

      <div class="footer__item hire-btn">
        <ButtonLink :text="btnHire.text" :link="btnHire.link" />
      </div>
    </div>
  </footer>
</template>

<script>
import { CONTACTS_LINKS } from "../data/contactsData";
import { BUTTON_DATA } from "../data/buttonsData";
import ButtonLink from "@/components/ButtonLink.vue";
import ContactItem from "@/components/ContactItem.vue";

export default {
  data() {
    return {
      contactData: CONTACTS_LINKS,
      btnHire: BUTTON_DATA.hireMe,
    };
  },
  components: {
    ButtonLink,
    ContactItem
  },
};
</script>


<style lang="scss" scoped>
.footer {
  color: var(--gray-text);
  background-color: var(--dark-gray-bg);

  .text > strong {
    color: var(--light-green-accent);
  }

  .network {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0;
    padding: 0;
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
