<template>
  <div v-if="show">
    <!-- use <basecard></basecard> in all other components and write <slot></slot> in base card -->
    <transition name="modal">
      <dialog v-if="show" open>
        <slot></slot>
      </dialog>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["show"],
};
</script>

<style>
dialog {
  box-shadow: 0 3px 8px chartreuse;
  border: 3px;
  border-radius: 15px;
  animation: modal 0.8s ease-in-out forwards;
}
.box {
  background-color: rebeccapurple;
  border-radius: 10px;
  width: 250px;
  height: 250px;
  padding: 50px;
  color: antiquewhite;
  flex-direction: column;
  text-align: center;
}

.box:hover {
  animation-name: rotate;
  animation-duration: 0.8s;
  animation-direction: reverse;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  /* 50% {
    transform: translateZ(250deg);
  } */
  100% {
    transform: rotate(360deg);
  }
}

/* .modal-enter-active {
  animation: modal 0.8s ease-out forwards;
}
.modal-leave-active {
  animation: modal 0.8s ease-in reverse;
} */

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-250px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
