<template>
  <h1>hi i am a ChildComponent</h1>
  <button @click="hadleClick">click me</button>
</template>

<script>
export default {
  emits: ["getDataFromChild"],
  data() {
    return {
      sendDataFromChild: "send me from child to parent",
    };
  },
  methods: {
    hadleClick() {
      this.$emit("getDataFromChild", this.sendDataFromChild);
    },
  },
};
</script>

<style></style>
