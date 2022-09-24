<template>
  <h2 class="fun">Login here</h2>
  <input type="email" placeholder="enter email" id="email" name="email" />
  <input
    type="password"
    placeholder="enter password"
    id="password"
    name="password"
  />
</template>

<script>
export default {};
</script>

<!-- same color will be applied to both login h2 and home h2 so use scoped -->
<style scoped>
.fun {
  color: brown;
}
</style>
