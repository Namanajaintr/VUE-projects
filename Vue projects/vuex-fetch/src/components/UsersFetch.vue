<template>
  <div>
    <h1>users</h1>
    <ul v-for="user in users" :key="user.id">
      <li>{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  // data(){
  //   return{
  //     users:[]
  //   }
  // }
  computed: {
    users() {
      return this.$store.state.usersData;
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
};
</script>

<style></style>
