import { createApp } from "vue";
import App from "./App.vue";
import FloatingVue from 'floating-vue'

import 'floating-vue/dist/style.css'

import "./assets/css/global.css";
import "./assets/css/normalize.css";
import "./assets/css/components/color-input.css";

createApp(App)
  .use(FloatingVue)
  .mount("#app");
