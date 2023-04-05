import { createApp } from 'vue'
import App from './App.vue'
import VueLazyload from "vue-lazyload";
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(VueLazyload, {
  lazyComponent: true,
  preLoad: 1.3,
});

app.use(router)

app.mount('#app')
