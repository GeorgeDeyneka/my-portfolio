<template>
  <footer class="footer">
    <div class="container">
      <p class="footer__item text" v-html="$t('footer.desc')" />

      <ul class="footer__item network">
        <ContactItem
          v-for="item of contacts"
          :key="item"
          fill-color="#c3c3c3"
          hover-color="#75fa7f"
          :show-title="false"
          :link-item="item"
        />
      </ul>

      <div class="footer__item hire-btn">
        <ButtonLink
          :text="$t('button.hire.text')"
          :link="$t('button.hire.link')"
        />
      </div>
    </div>
  </footer>
</template>

<script>
import { contacts } from "@/lang/data";
import ButtonLink from "@/components/ButtonLink.vue";
import ContactItem from "@/components/ContactItem.vue";

export default {
  components: {
    ButtonLink,
    ContactItem,
  },

  data() {
    return {
      contacts,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base/variables.scss";

.footer {
  color: var(--gray-text);
  background-color: var(--dark-gray-bg);

  &__item {
    @media #{$desktop} {
      min-width: 280px;
    }
  }

  .text {
    &::v-deep > strong {
      color: var(--light-green-accent);
    }

    @media #{$desktop} {
      max-width: 280px;
    }
  }

  .network {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0;
    padding: 0;
  }

  .hire-btn {
    @media #{$desktop} {
      display: flex;
      justify-content: center;
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

    @media #{$desktop} {
      padding: 10px 0;
    }
  }
}
</style>
