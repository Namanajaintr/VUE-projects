<template>
  <h3>{{ name }} {{ dishisFav ? "❤️" : "whislist" }}</h3>
  <img :src="img" width="150" height="150" />
  <button @click="toggleFavourites">Toggle Favourites</button>
  <button @click="toggleDetails">
    {{ dishdetails ? "Hide" : "Show" }} Details
  </button>
  <ul v-if="dishdetails">
    <br />
    <img :src="img" width="150" height="150" />
    <li>
      <strong>Description:</strong>
      {{ desc }}
    </li>
    <li>
      <strong>Price:</strong>
      {{ price }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    img: { required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    isFav: { type: Boolean, required: true },
  },
  data() {
    return {
      dishisFav: this.isFav,
      dishdetails: false,
    };
  },
  methods: {
    toggleFavourites() {
      //   if (this.dishisFav) {
      //     this.dishisFav = false;
      //   } else {
      //     this.dishisFav = true;
      //   }
      this.dishisFav = !this.dishisFav;
    },
    toggleDetails() {
      this.dishdetails = !this.dishdetails;
    },
  },
};
</script>

<style></style>
