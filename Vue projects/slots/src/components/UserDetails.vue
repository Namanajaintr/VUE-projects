<template>
  <section>
    <base-card>
      <template v-slot:header>
        <h3>Name:{{ userData.name }}</h3>
        <p>
          {{ userData.desc }}
        </p>
        <p>
          {{ userData.role }}
        </p>
      </template>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ["userData"],
  components: {},
};
</script>

<style>
/* section {
  box-shadow: 0 3px 9px rgb(106, 47, 255);
  border-radius: 10px;
  max-width: 30rem;
  background-color: aqua;
  color: black;
} */
</style>
