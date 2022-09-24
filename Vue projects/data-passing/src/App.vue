<template>
  <h1>Welcome to my place</h1>
  <!-- rendering MyComponent and ChildComponent-->
  <my-component greeting="Good Morning" :age="20" :Entername="UserName" />

  <child-compnent @getDataFromChild="getDataFromChild" />
  <h1>
    data sent from Child and received by parent is:{{ receivedDataFromChild }}
  </h1>
</template>

<script>
import ChildCompnent from "./components/ChildCompnent.vue";
import MyComponent from "./components/MyComponent.vue";

export default {
  name: "App",
  components: {
    MyComponent,
    ChildCompnent,
  },
  data() {
    return {
      UserName: "Namana456",
      receivedDataFromChild: "",
    };
  },
  methods: {
    getDataFromChild(child) {
      console.log("getDataFromChild executed", child);
      this.receivedDataFromChild = child;
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
