<template>
  <h1>Component C</h1>
  <h2>data by Provide_inject:{{ data }}</h2>
  <h2>method by provide_inject:{{ method }}</h2>
</template>

<script>
export default {
  inject: ["data", "method"],
};
</script>

<style></style>
