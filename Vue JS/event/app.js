let app = Vue.createApp({
  data() {
    return {
      counter: 50,
    };
  },
  methods: {
    increment(num) {
      console.log("incremented executed");
      this.counter += num;
    },
    decrement(num) {
      console.log("decremented executed");
      this.counter -= num;
    },
    reset() {
      console.log("reset executed");
      this.counter = 40;
    },
    handleSubmit() {
      alert("Form successfully submitted");
    },
  },
});
app.mount("#events");
