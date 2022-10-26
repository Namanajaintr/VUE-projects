<template>
  <div>
    <v-divider><navbar-comp /></v-divider>

    <v-divider><carousel-comp /></v-divider>

    <v-divider><card-comp /></v-divider>

    <v-divider><table-comp /></v-divider>
  </div>
</template>

<script>
import CardComp from "./components/CardComp.vue";
import CarouselComp from "./components/CarouselComp.vue";
import TableComp from "./components/TableComp.vue";
import NavbarComp from "./components/NavbarComp.vue";

export default {
  name: "App",

  components: {
    CardComp,
    TableComp,
    CarouselComp,
    NavbarComp,
  },

  data: () => ({
    //
  }),
};
</script>
