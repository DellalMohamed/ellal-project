import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

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
