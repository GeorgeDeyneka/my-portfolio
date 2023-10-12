<template>
  <div class="switcher__wrapper">
    <div class="swicther">
      <div class="switcher__btn switcher__link">
        {{ currentLocale }}
      </div>

      <ul class="switcher__list">
        <li
          v-if="currentLocale !== 'en'"
          class="switcher__item"
          @click="changeLocale('en')"
        >
          <a class="switcher__link" target="_blank"> en </a>
        </li>

        <li
          v-if="currentLocale !== 'ua'"
          class="switcher__item"
          @click="changeLocale('ua')"
        >
          <a class="switcher__link" target="_blank"> ua </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentLocale() {
      return this.$i18n.locale;
    },
  },

  methods: {
    changeLocale(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style lang="scss">
.switcher {
  &__link {
    text-transform: uppercase;
  }
}
</style>
