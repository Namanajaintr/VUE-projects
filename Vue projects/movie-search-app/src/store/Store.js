import { createStore } from "vuex";

import axios from "axios";

let store = createStore({
  state() {
    return {
      movieData: [],
    };
  },

  mutations: {
    fetchMovies(state, payload) {
      state.movieData = payload;
      //console.log("state", state);
    },
  },

  actions: {
    async fetchMovies(context, searchText) {
      try {
        let response = await axios.get(
          `https://api.tvmaze.com/search/shows?q=${searchText}`
        );
        console.log("response", response);
        let responseData = response.data;
        console.log("responseData", responseData);

        context.commit("fetchMovies", responseData);
      } catch (err) {
        console.log("error", err);
      }
    },
  },
});
export default store;
