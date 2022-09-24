<template>
  <h1>Little Indian Restro🏩</h1>
  <img
    src="https://media.istockphoto.com/photos/healthy-food-for-balanced-flexitarian-mediterranean-diet-concept-picture-id1159204281"
    alt="image"
    height="300"
    width="300"
  />

  <ul>
    <dish-details
      v-for="dish in dishes"
      :key="dish.id"
      :name="dish.name"
      :img="dish.img"
      :desc="dish.desc"
      :price="dish.price"
      :isFav="dish.isFav"
    />
  </ul>
</template>

<script>
import DishDetails from "./components/DishDetails.vue";
export default {
  name: "App",
  components: { DishDetails },
  data() {
    return {
      dishes: [
        {
          id: "avi",
          name: "Butter Chicken",
          desc: "Spicy and Yummy",
          price: "Rs 500",
          img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          isFav: true,
        },
        {
          id: "vaibhav",
          name: "Chole Bature",
          desc: "Chole bhature is often eaten as a breakfast dish, sometimes accompanied with lassi. It can also be street food or a complete meal and may be accompanied with onions, pickled carrots, green chutney or achaar.",
          price: "Rs 750",
          img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          isFav: false,
        },
        {
          id: "akshu",
          name: "South Thali",
          desc: "an indian style of lunch or dinner meal, served with a selection of recipes or dishes arranged in plate or thali.",
          price: "Rs 50",
          img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          isFav: false,
        },
        {
          id: "namana",
          name: "Manchurian and Noodles",
          desc: "Veg Manchurian and noodles is a delicious Indo-Chinese dish made with wisps of vegetables formed into dumplings and dunked into a sauce with a gorgeous ...",
          price: "Rs 250",
          img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          isFav: false,
        },
      ],
    };
  },
  methods: {
    //to get selected dishDetail from child component
    toggleFavouriteStatus(dishID) {
      // console.log("dishId in parent", dishID);
      let identifiedDish = this.dishes.find((dish) => dish.id === dishID);
      //console.log("identifiedDish",identifiedDish);
      identifiedDish.isFav = !identifiedDish.isFav;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
