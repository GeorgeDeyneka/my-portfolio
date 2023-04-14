import { createApp } from "vue";
import App from "./App.vue";
import VueLazyload from "vue-lazyload";
import router from "./router";
// import firebase from "firebase/compat/app";
// import "firebase/compat/database";
import "./assets/main.css";
import SvgSprite from "./components/icons/SvgSprite.vue";
import store from "./store";

// const firebaseConfig = {
//   apiKey: "AIzaSyA_6nUw_aqysoF0jaupTcU5pU8xNDAhUMY",
//   authDomain: "portfolio-deyneka.firebaseapp.com",
//   databaseURL:
//     "https://portfolio-deyneka-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "portfolio-deyneka",
//   storageBucket: "portfolio-deyneka.appspot.com",
//   messagingSenderId: "908361671087",
//   appId: "1:908361671087:web:1aefe683f20fa87d850f5a",
//   measurementId: "G-F8DBZWPPWM",
// };

// firebase.initializeApp(firebaseConfig);

// const database = firebase.database();

const app = createApp(App);

// app.config.globalProperties.$database = database;

app.use(VueLazyload, {
  lazyComponent: true,
  preLoad: 1.3,
});

app.use(store)

app.use(router);

app.component("svg-sprite", SvgSprite);

app.mount("#app");
