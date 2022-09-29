import { createApp } from "vue";
import { Store } from "vuex";
import App from "./App.vue";

let app = createApp(App);

app.use(Store);
app.mount("#app");
