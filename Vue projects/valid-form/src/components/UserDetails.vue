<template>
  <h2 class="mb3">User Details</h2>
  <table v-for="(user, index) in receivedData" :key="index">
    <tr>
      <td>{{ user.email }}</td>
    </tr>
    <tr>
      <td>{{ user.password }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: ["receivedData"],
};
</script>

<style></style>
