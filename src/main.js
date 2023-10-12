import { createApp } from "vue";
import App from "./App.vue";
import VueLazyload from "vue-lazyload";
import router from "./router";
import store from "./store";
import SvgSprite from "@/views/SvgSprite.vue";
import "@/assets/styles/global.scss";

const app = createApp(App);

app.use(VueLazyload, {
  lazyComponent: true,
  preLoad: 1.3,
});

app.use(store);

app.use(router);

app.component("SvgSprite", SvgSprite);

app.mount("#app");
