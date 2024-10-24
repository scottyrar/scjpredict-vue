import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import MyPreset from "./presets";
import ToastService from "primevue/toastservice";
import VueGtag from "vue-gtag";

const app = createApp(App);

app.use(router);
app.use(ToastService);
app.use(PrimeVue, { unstyled: true, pt: MyPreset });
// app.use(VueGtag, {
//   pageTrackerTemplate(to) {
//     return {
//       page_title: to.name,
//       page_path: to.path
//     }
//   },
//   config: {
//     id: "G-VZPNK3HTXC",
//   },
// },router);
app.mount("#app");
