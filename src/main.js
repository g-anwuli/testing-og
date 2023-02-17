import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueSocialSharing from "vue-social-sharing";
import {VueMeta} from "vue-meta";

createApp(App).use(router).use(VueMeta, {
    // optional pluginOptions
    refreshOnceOnNavigation: true
  }).use(VueSocialSharing).mount("#app");
