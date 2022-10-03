<template>
  <div>
    <h1>SUPERHIT MOVIES INFO</h1>
    <div class="movie">
      <div class="search">
        <div class="input-group">
          <div class="form-outline">
            <input
              type="search"
              placeholder="Search here..."
              class="form-control"
              v-model="searchText"
              v-on:keydown.enter="getMovies()"
            />
          </div>
          <button type="button" class="btn btn-primary" @click="getMovies()">
            Search🔎
          </button>
        </div>
      </div>
      <!-- <div class="input-group">
    <div class="serach">
      <input
        type="search"
        v-model="searchText"
        placeholder="Search here..."
        class="form-control"
        v-on:keydown.enter="getMovies"
      />

      <button type="button" class="btn btn-primary" @click="getMovies">
        Search
      </button>
    </div>
    
  </div> -->

      <!-- <div>
    <ul v-for="movie in movies" :key="movie._id">
      <li>{{ movie.show.name }}</li>
    </ul> 
  </div>-->

      <div class="flexbox">
        <div class="row movie-card" style="width: 100rem">
          <div
            v-for="movie in movies"
            :key="movie._id"
            class="card"
            style="width: 25rem"
          >
            <img
              class="card-img-top"
              :src="movie.show.image.medium"
              alt="image"
            />
            <div class="card-body">
              <h3 class="card-header">
                Name: <strong>{{ movie.show.name }}</strong>
              </h3>
              <h3 class="card-text">Language: {{ movie.show.language }}</h3>
              <p class="card-text">Summary:{{ movie.show.summary }}</p>
              <p class="card-text">Year: {{ movie.show.premiered }}</p>
              <p class="card-footer">Rating: {{ movie.show.rating }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    getMovies() {
      this.$store.dispatch("fetchMovies", this.searchText);
      this.searchText = "";
    },
  },
  computed: {
    movies() {
      return this.$store.state.movieData;
    },
  },
};
</script>

<style>
.search {
  margin: 0 auto;
  display: inline-block;
}
.flexbox {
  display: flex;
  margin-left: 200px;
  margin-top: 50px;
}
h1 {
  background-color: brown;
}
.movie {
  /* background-image: url("https://img.freepik.com/free-vector/gradient-mountain-landscape_23-2149161561.jpg?w=1060&t=st=1664450299~exp=1664450899~hmac=b77c327e544835885a28f78e7b9c831f3026c1ec16d51602ea8dc0b654f83f90"); */
  background-color: plum;
}
</style>
