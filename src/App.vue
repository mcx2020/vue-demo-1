<template>
  <div id="app">
    <div v-greet>Hello</div>
    <div v-greet2>Hello2</div>
  </div>
</template>

<script>
export default {
  directives: {
    greet2: {
      inserted(el) {
        el.addEventListener("click", () => console.log("Hello2"));
      }
    }
  }
};
</script>

<style lang="scss">
</style>
