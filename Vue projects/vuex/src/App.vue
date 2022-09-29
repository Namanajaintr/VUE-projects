<template>
  <first-counter />
  <second-counter />
  <button @click="addOne">Increment(delay)</button>
  <button @click="subOne">decrement</button>
  <button @click="addwithoutDelay">increment(withoutDelay)</button>
</template>

<script>
import FirstCounter from "./components/FirstCounter.vue";
import SecondCounter from "./components/SecondCounter.vue";

export default {
  name: "App",
  components: {
    FirstCounter,
    SecondCounter,
  },
  methods: {
    // addOne() {
    //   this.$store.commit("increment");
    // },
    // subOne() {
    //   this.$store.commit("decrement");
    // },

    addOne() {
      //to pass the payload means some own value to the counter
      // this.$store.commit("increase", { value: 30 });

      // dispatchig an action
      this.$store.dispatch({ type: "increase", value: 30 });
    },
    subOne() {
      this.$store.commit("decrease", { value: 10 });
    },

    addwithoutDelay() {
      this.$store.dispatch({ type: "increment" });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
