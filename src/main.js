import { createApp } from "vue";
import App from "./App.vue";
import VueLazyload from "vue-lazyload";
import router from "./router";
import store from "./store";
import SvgSprite from "@/views/SvgSprite.vue";
import "@/assets/styles/global.scss";
import { createI18n, useI18n } from "vue-i18n";
import { langs, defaultLocale } from "@/lang/i18n";

const messages = Object.assign(langs);

const storageLang = sessionStorage.getItem("lang");

const i18n = createI18n({
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

app.use(store);

app.use(router);

app.component("SvgSprite", SvgSprite);

app.use(i18n).mount("#app");
