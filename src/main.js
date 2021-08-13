import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import FloatingVue from "floating-vue";

import "floating-vue/dist/style.css";

import "./assets/css/global.css";
import "./assets/css/normalize.css";
import "./assets/css/components/color-input.css";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia).use(FloatingVue).mount("#app");
