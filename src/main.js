import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueSocialSharing from "vue-social-sharing";

createApp(App).use(router).use(VueSocialSharing).mount("#app");
