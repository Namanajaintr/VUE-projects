<template>
  <counter-one />
  <counter-two />
  <component-a />
</template>

<script>
import ComponentA from "./components/ComponentA.vue";
import CounterOne from "./components/CounterOne.vue";

import CounterTwo from "./components/CounterTwo.vue";

export default {
  name: "App",
  components: {
    CounterOne,
    CounterTwo,
    ComponentA,
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
