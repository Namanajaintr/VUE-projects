<template>
  <users-fetch />
</template>

<script>
import UsersFetch from "./components/UsersFetch.vue";

export default {
  name: "App",
  components: {
    UsersFetch,
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
