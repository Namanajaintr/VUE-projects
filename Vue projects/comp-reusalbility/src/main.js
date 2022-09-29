import { createApp } from "vue";
import App from "./App.vue";

//import BaseHtag from "./components/BaseHtag.vue";
import BaseCard from "./components/BaseCard.vue";

let app = createApp(App);
//global import

app.component("base-card", BaseCard);

app.mount("#app");
