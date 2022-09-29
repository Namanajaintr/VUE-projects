<template>
  <add-todos />
  <delete-todos />
</template>

<script>
import AddTodos from "./components/AddTodos.vue";
import DeleteTodos from "./components/DeleteTodos.vue";

export default {
  name: "App",
  components: {
    AddTodos,
    DeleteTodos,
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
