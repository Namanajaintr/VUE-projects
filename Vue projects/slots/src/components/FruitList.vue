<template>
  <section>
    <base-card>
      <h2>Fruits List</h2>

      <ul>
        <li>Apple</li>
        <li>Mango</li>
        <li>Banana</li>
        <li>lichi</li>
      </ul>
      <template v-slot:body>
        <h3>this is inside body</h3>
      </template>
    </base-card>
  </section>
</template>

<script>
//import BaseCard from "./BaseCard.vue"; --> global import no eed to import locally in every comp
export default {
  components: {},
};
</script>

<style>
/* section {
  box-shadow: 0 3px 9px greenyellow;
  border-radius: 10px;
  max-width: 30rem;
  background-color: aqua;
  color: black;
} */
</style>
