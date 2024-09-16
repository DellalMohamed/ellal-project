import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//path with vite
/*import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // '@' points to 'src' directory
    },
  },
  plugins: [vue()],
});*/

//pinia
import { createPinia } from "pinia";

//mitt onfig
import mitt from "mitt";
const Emitter = mitt();
//vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Components

const vuetify = createVuetify({
  components,
  directives,
});
createApp(App)
  .use(createPinia())
  .provide("Emitter", Emitter)
  .use(vuetify)
  .use(router)
  .mount("#app");
