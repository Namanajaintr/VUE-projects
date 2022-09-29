import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import axios from "axios";

let store = createStore({
  state() {
    return {
      usersData: [],
    };
  },

  mutations: {
    fetchUsers(state, payload) {
      state.usersData = payload;
      console.log("state", state);
    },
  },

  actions: {
    async fetchUsers(context) {
      try {
        let response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log("response", response);
        // let data = response;
        context.commit("fetchUsers", response.data);
      } catch (err) {
        console.log("error", err);
      }
    },
  },
});

let app = createApp(App);
app.use(store);
app.mount("#app");
