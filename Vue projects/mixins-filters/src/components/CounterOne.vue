<template>
  <h1>Counter 1 :{{ counter }}</h1>
  <button @click="increment">Increment</button>
  <button @click="decrement">decrement</button>
  <button @click="reset">reset</button>
</template>

<script>
import CounterMixin from "@/mixins/CounterMixin";

export default {
  //   data() {
  //     counter: 0;
  //   },
  //   methods: {
  //     increment() {
  //       this.counter += 10;
  //     },
  //     decrement() {
  //       this.counter -= 20;
  //     },
  //     reset() {
  //       this.counter = 0;
  //     },
  //   },
  mixins: [CounterMixin(0, 10, 20)],
};
</script>

<style></style>
