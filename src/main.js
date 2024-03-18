import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import VueLazyload from "vue-lazyload";
import router from "./router";
import "@/assets/styles/global.scss";
import { createI18n, useI18n } from "vue-i18n";
import { langs, defaultLocale } from "@/lang/i18n";

const pinia = createPinia();

const messages = Object.assign(langs);

const storageLang = sessionStorage.getItem("lang");

export const i18n = createI18n({
  warnHtmlMessage: false,
  legacy: false,
  locale: storageLang || defaultLocale,
  fallbackLocale: "en",
  messages,
});

const app = createApp(App, {
  setup() {
    const { t, tm } = useI18n();
    return { t, tm };
  },
});

app.use(VueLazyload, {
  lazyComponent: true,
  preLoad: 1.3,
});

app.use(pinia);

app.use(router);

app.use(i18n).mount("#app");
