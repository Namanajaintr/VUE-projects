<template>
  <h1>Fetched Users Name</h1>
  <ul v-for="value in users" :key="value.id">
    <li>
      {{ value.name }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let getData = await res.json();
        console.log("getData", getData);
        // let resData = getData;
        // console.log("resData", resData);
        this.users = getData;
      } catch (err) {
        console.log("error", err);
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style></style>
