<template>
  <h1>User</h1>
</template>

<script>
import { JSONPOST } from "../axiosConfig";
export default {
  methods: {
    async fetchPost() {
      let res = await JSONPOST.get("/posts");
      console.log("post response", res);
    },
  },
  mounted() {
    this.fetchPost();
  },
};
</script>

<style></style>
