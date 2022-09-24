let app = Vue.createApp({
  data() {
    return {
      newfruits: "",
      fruits: ["apple", "mango", "litchi", "banana"],
    };
  },
  methods: {
    addFruits() {
      console.log("fruits entered is :", this.newfruits);
      this.fruits.push(this.newfruits);
      // to reset inputfield
      this.newfruits = " ";
    },
    removeFruits(ind) {
      console.log("fruits deleted is :", this.newfruits[ind]);
      this.fruits.splice(ind, 1);
    },
  },
});
app.mount("#fruit");
