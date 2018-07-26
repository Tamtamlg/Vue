<template>
  <div class="hello container">
    <div class="jumbotron mt-5">
      <h1 class="display-3">{{ msg }}</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <img src="../assets/logo.png" alt="">
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      msg: "Тест Vue.js"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
