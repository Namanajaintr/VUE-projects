<template>
  <div v-if="thatReceipe" class="card" style="width: 70rem">
    <ul class="list-group list-group-flush">
      <li class="list-group-item bg-light">
        <strong>{{ name }}</strong>
      </li>
      <img
        :src="img"
        class="list-group-item"
        alt="..."
        width="1000"
        height="600"
      />
      <li class="list-group-item">
        <strong>steps in making {{ name }}</strong>
      </li>
      <li class="list-group-item card-text">{{ desc }}</li>
    </ul>
  </div>
</template>

<script>
export default {
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
    thatReceipe: {
      required: true,
    },
  },
  // props: ["receipedetails"],
};
</script>

<style scoped>
.card {
  text-align: center;
  margin-left: 50px;
}
</style>
