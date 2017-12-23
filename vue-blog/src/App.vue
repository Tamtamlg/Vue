<template>
  <div id="app">
    <header>
      <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src="./assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Главная</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/blog" class="nav-link">Блог</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">О нас</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
body {
  margin: 0;
}
h1 {
  margin-top: 0;
  padding: 30px 50px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
