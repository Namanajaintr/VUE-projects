<template>
  <navbar-comp />
  <login-comp @getFormDataFromLogin="getFormDataFromLogin" />
  <user-details :receivedData="receivedData" />
</template>

<script>
import LoginComp from "./components/LoginComp.vue";
import NavbarComp from "./components/NavbarComp.vue";
import UserDetails from "./components/UserDetails.vue";

export default {
  name: "App",
  components: {
    LoginComp,
    NavbarComp,
    UserDetails,
  },
  data() {
    return {
      receivedData: [],
    };
  },
  methods: {
    getFormDataFromLogin(data) {
      console.log("data received from logincomp :", data);
      this.receivedData.push(data);
      console.log("receivedData :", this.receivedData);
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
