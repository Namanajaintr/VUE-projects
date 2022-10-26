<template>
  <div class="container">
    <div class="block" :class="{ animateBlockLeft: animate }">
      This text is the content of the box. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
      aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <button @click="animateBlock">Move Left</button>
  </div>

  <div class="container">
    <button @click="show = !show">Toggle</button>
    <Transition name="fade">
      <p v-if="show">Hey its so AMAZING...</p>
    </Transition>
  </div>

  <div>
    <base-card :show="show">
      <h1>Happy Dusshera 🎎</h1>
      <div class="box">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMUDF99QFyFb68s2hYZOGxtB_zZHiltbGQ9Gccg7AL5yUstRYI8fI4aJ_15lVqZx8O6XM&usqp=CAU"
        />
      </div>
      <button @click="show = !show">close me</button>
    </base-card>
  </div>
  <div>
    <button @click="show = !show">open me</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animate: false,
      show: false,
    };
  },
  methods: {
    animateBlock() {
      this.animate = !this.animate;
    },
  },
};
</script>

<style>
.animateBlockLeft {
  /* transform: translateX(-300px); */
  animation: slide-fade 0.5s ease-in-out forwards;
  animation-direction: alternate-reverse;
}

.block {
  background-color: darkmagenta;
  color: aquamarine;
  /* transition: transform 0.5s ease-out; */
}

.container {
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 50px;
  margin-left: 500px;
  background-color: palevioletred;
  flex-direction: column;
  align-content: center;
  align-items: center;
}

button {
  background-color: green;
  color: black;
}

button:hover {
  background-color: crimson;
  color: aliceblue;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(100px);
  color: blue;
}

.fade-enter-active {
  transition: all 1s ease-out;
  color: burlywood;

  /* to use KeyFrames give name same wt u hv given in keyframes
  animation: slide-fade 1s ease-in reverse; */
}

.fade-enter-to {
  opacity: 1;
  color: greenyellow;
}

.fade-leave-from {
  opacity: 1;
  color: rgb(29, 39, 236);
}

.fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
  color: fuchsia;

  /* to use keyFrames
  animation: slide-fade 1s ease-in; */
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(100px);
  color: rgb(173, 230, 177);
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }
  50% {
    transform: translateX(-125px) scale(2);
  }
  100% {
    transform: translateX(-250px) scale(1);
  }
}
</style>
