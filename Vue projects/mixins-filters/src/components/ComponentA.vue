<template>
  <h1>username:{{ username }}</h1>

  <h1>local Filter=> username in uppercase :{{ uppercase }}</h1>

  <h2>currency in Rs:{{ amount }}</h2>

  <h2>Global Filter=> currency in USD:{{ $filters.currencyUSD(amount) }}</h2>
</template>

<script>
export default {
  data() {
    return {
      username: "Jonhy lever",
      amount: 20000,
    };
  },
  // we have to write local filters in computed properties
  computed: {
    upperCaseFilter() {
      return this.username.toLocaleUpperCase();
    },
  },
};
</script>

<style></style>
