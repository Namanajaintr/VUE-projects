let app = Vue.createApp({
  data() {
    return {
      message: "Hey how are you",
    };
  },
  methods: {
    setText() {
      console.log(this.$refs.userText.value);
      this.message = this.$refs.userText.value;
    },
    setFocus() {
      this.$refs.Text.focus();
    },
  },
});
app.mount("#dataBindingwithref");
