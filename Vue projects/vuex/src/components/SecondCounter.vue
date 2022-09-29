<template>
  <h3>counter 2:{{ counter }}</h3>
</template>

<script>
export default {
  computed: {
    // counter() {
    //   return this.$store.state.counter * 3;
    // },
    counter() {
      //return this.$store.getters.counter3times;
      return this.$store.getters.limitCounter;
    },
  },
};
</script>

<style></style>
