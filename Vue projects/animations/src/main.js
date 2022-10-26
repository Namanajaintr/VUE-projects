import { createApp } from "vue";
import App from "./App.vue";
import baseCard from "./components/baseCard.vue";

let app = createApp(App);
app.component("base-card", baseCard);
app.mount("#app");
