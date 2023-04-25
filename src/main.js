import { createApp } from "vue";
import App from "./App.vue";
import VueLazyload from "vue-lazyload";
import router from "./router";
import "./assets/main.css";
import SvgSprite from "./components/icons/SvgSprite.vue";
import store from "./store";
import "@/assets/variables.scss";

const app = createApp(App);

app.use(VueLazyload, {
  lazyComponent: true,
  preLoad: 1.3,
});

app.use(store)

app.use(router);

app.component("svg-sprite", SvgSprite);

app.mount("#app");
