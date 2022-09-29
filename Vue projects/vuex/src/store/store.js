import { createStore } from "vuex";

let store = createStore({
  state() {
    return {
      counter: 1000,
    };
  },

  mutations: {
    //we should not write async code in mutations

    increment(state) {
      console.log("increment mutation exec");
      state.counter += 10;
    },
    // decrement(state) {
    //   console.log("decrement mutation exec");
    //   state.counter -= 10;
    // },

    // if we want to pass our own values
    increase(state, payload) {
      console.log("state", state);
      console.log("payload", payload);
      state.counter += payload.value;
    },
    decrease(state, payload) {
      console.log("state", state);
      console.log("payload", payload);
      state.counter -= payload.value;
    },
  },

  getters: {
    //used to compute data and do some calc
    counter3times(state) {
      return state.counter * 3;
    },

    limitCounter(state, getters) {
      // instead of re-writing the logic we can use the above glitters
      // let counter3times = state.counter*3;

      let counter3times = getters.counter3times;
      if (counter3times < 0) {
        return 0;
      }
      if (counter3times > 1000) {
        return 100;
      }
      return counter3times;
    },
  },

  actions: {
    // we can use the same method name as in mutations to perform async activity
    // actions will come in bn components and mutations
    // actions method will get context object as an argument

    increase(context, payload) {
      // we can write async code
      console.log("increase action exec");

      console.log("context", context);
      setTimeout(() => {
        context.commit("increase", payload);
      }, 2000);
    },

    increment(context) {
      console.log("increment action without async code addwithoutDelay");
      //calling a mutation increment func
      context.commit("increment");
    },
  },
});
export default store;
