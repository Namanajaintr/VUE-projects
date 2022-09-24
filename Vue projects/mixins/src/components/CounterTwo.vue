<template>
  <h1>Counter 2 :{{ counter }}</h1>
  <button @click="increment">Increment</button>
  <button @click="decrement">decrement</button>
  <button @click="reset">reset</button>
</template>

<script>
import CounterMixin from "@/mixins/CounterMixin";

export default {
  //   data() {
  //     counter: 10;
  //   },
  //   methods: {
  //     increment() {
  //       this.counter += 100;
  //     },
  //     decrement() {
  //       this.counter -= 60;
  //     },
  //     reset() {
  //       this.counter = 10;
  //     },
  //   },
  mixins: [CounterMixin(10, 100, 60)],
};
</script>

<style></style>
