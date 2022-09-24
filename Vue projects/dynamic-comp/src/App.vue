<template>
  <navbar-comp />

  <button @click="setSelectedComp('home-comp')">Home🏡</button>
  <button @click="setSelectedComp('login-comp')">Login📧</button>

  <!-- <home-comp v-if="selectedComp === 'home-comp'" />
  <login-comp v-if="selectedComp === 'login-comp'" /> -->

  <keep-alive><component :is="selectedComp"></component></keep-alive>
</template>

<script>
import HomeComp from "./components/HomeComp.vue";
import LoginComp from "./components/LoginComp.vue";
import NavbarComp from "./components/NavbarComp.vue";

export default {
  name: "App",
  components: {
    HomeComp,
    LoginComp,
    NavbarComp,
  },
  data() {
    return {
      selectedComp: "home-comp",
    };
  },
  methods: {
    setSelectedComp(comp) {
      console.log(comp);
      this.selectedComp = comp;
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
