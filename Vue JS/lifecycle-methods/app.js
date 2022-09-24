// Lifecycle Methods in Vue
let app = Vue.createApp({
  data() {
    return {
      message: "Hey how are you",
    };
  },
  methods: {
    setClick() {
      this.message = "namana";
    },
  },
  //mounting phase

  beforeCreate() {
    console.log("beforeCreate executed");
  },
  created() {
    console.log("created executed");
  },
  beforeMount() {
    console.log("beforeMount executed");
  },
  mounted() {
    console.log("mounted executed");
    this.$refs.Text.focus();
  },

  //updating phase

  beforeUpdate() {
    console.log("beforeUpdate executed");
  },
  updated() {
    console.log("updated executed");
  },

  //unmounting phase

  beforeUnmount() {
    console.log("beforeUnmount executed");
  },
  unmounted() {
    console.log("unmounted executed");
  },
});
app.mount("#lifecycle");

// unmounting
setTimeout(() => {
  app.unmount();
}, 4000);
