let app = Vue.createApp({
  data() {
    return {
      emaildata: "",
      howAreYouFeeling: " ",
      namesThatRhyme: [],
    };
  },
  methods: {
    //setName(event){
    // this.email=event.target.value
    // },
    reset() {
      this.email = "";
    },
  },
});
app.mount("#dataBinding");
