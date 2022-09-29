<template>
  <h3>Counter:{{ counter }}</h3>

  <!-- we can access these buttons and methods from any other component as it is connected to store -->

  <!-- <button @click="addOne">Increment</button>
  <button @click="subOne">decrement</button> -->
</template>

<script>
export default {
  //   data() {
  //     return {
  //       counter: 1000,
  //     };
  //   },
  computed: {
    counter() {
      // to get connected and access the store and get data in state
      return this.$store.state.counter;
    },
  },
  //   methods: {
  //     addOne() {
  //       this.$store.commit("increment");
  //     },
  //     subOne() {
  //       this.$store.commit("decrement");
  //     },
  //   },
};
</script>

<style></style>
