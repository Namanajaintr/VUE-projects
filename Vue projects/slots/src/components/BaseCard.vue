<template>
  <div>
    <!-- use <basecard></basecard> in all other components and write <slot></slot> in base card -->
    <header>
      <slot name="header"></slot>
    </header>
    <body>
      <slot name="body"></slot>
    </body>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  box-shadow: 0 3px 9px greenyellow;
  border-radius: 10px;
  max-width: 30rem;
  background-color: aqua;
  color: black;
}
body {
  background-color: brown;
  color: wheat;
}
</style>
