let app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },

  watch: {
    // takes counter state as a function name counter()
    counter(value) {
      console.log("value", value);
      if (value > 50) {
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    },
  },

  computed: {
    fullname() {
      console.log("fullname executed");
      if (this.name === "") {
        return "";
      }
      return this.name + "Rosy";
    },
    doublecounter() {
      console.log("doublecounter executed");

      return this.counter * 2;
    },
  },

  methods: {
    increment() {
      this.counter += 5;
    },
    decrement() {
      this.counter -= 5;
    },
    // fullname() {
    //   console.log("fullname executed");
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + "Rosy";
    // },
  },
});
app.mount("#dataBinding");
