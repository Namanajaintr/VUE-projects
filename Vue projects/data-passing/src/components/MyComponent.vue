<template>
  <h1>Hello world this is my MyComponent</h1>
  <h3>{{ greeting }} my name is {{ name }}</h3>
  <h3>Entername is :{{ Entername }} age is :{{ age }}</h3>
</template>

<script>
export default {
  //props:["greeting","Entername","age"],
  props: {
    greeting: { type: String, required: true },
    Entername: [String, Number],
    age: { type: Number, default: 90, required: true },
  },
  data() {
    return {
      name: "Namana",
    };
  },
};
</script>

<style></style>
