<template>
  <div class="mobileCard">
    <h2>{{ mobileName }}</h2>
    <p>{{ rating }} {{ review }}</p>
    <h3>Rs:{{ mobilePrice }}</h3>
  </div>
  <div></div>
  <ul></ul>
</template>

<script>
export default {
  props: ["mobileName", "rating", "review", "mobilePrice"],
};
</script>

<style>
.mobileCard {
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  border-radius: 10px;
  color: white;
  background-color: blueviolet;
  width: 30%;
}
</style>
