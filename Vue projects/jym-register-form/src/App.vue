<template>
  <register-form />
  <fetch-users />
</template>

<script>
import FetchUsers from "./components/fetchUsers.vue";
import RegisterForm from "./components/RegisterForm.vue";

export default {
  name: "App",
  components: {
    RegisterForm,
    FetchUsers,
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
