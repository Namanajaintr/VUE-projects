<template>
  <div @click="toggleDetails" class="card" style="width: 19rem">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ id }}</li>
      <li class="list-group-item">{{ name }}</li>
      <img
        :src="img"
        class="list-group-item"
        alt="..."
        width="300"
        height="300"
      />
    </ul>
  </div>

  <!-- <div v-if="receipedetails" class="card float-right" style="width: 32rem">
    <ul class="list-group list-group-flush">
      <li class="list-group-item bg-light">{{ name }}</li>
      <img
        :src="img"
        class="list-group-item"
        alt="..."
        width="480"
        height="480"
      />
      <li class="list-group-item">steps in making {{ name }}</li>
      <li class="list-group-item card-text">{{ desc }}</li>
    </ul>
  </div> -->
</template>

<script>
export default {
  emits: ["receipeStatus"],
  components: {},
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    img: {
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },

  // data() {
  //   return {
  //     receipedetails: false,
  //   };
  // },
  methods: {
    toggleDetails() {
      this.$emit("receipeStatus", this.id);
      //this.receipedetails = !this.receipedetails;
    },
  },
};
</script>

<style scoped>
.card {
  text-align: center;
  font-weight: bold;
  margin-left: 20px;
}
</style>
