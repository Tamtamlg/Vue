<template>
  <section class="blog-page container">
    <h1>Все статьи</h1>
    <ul v-if="posts">
      <li v-for="(post, index) in posts" :key="post.id" class="card">
        <div class="card-body">
        <h3 class="card-title">{{post.title}}</h3>
        <router-link :to="{ name: 'Post', params: {id: index} }" class="btn btn-info">Подробнее</router-link>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      posts: []
    };
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      this.posts = response.data;
    });
  }
};
</script>

<style scoped>
ul {
  padding: 0;
  list-style: none;
}
li {
  margin-bottom: 30px;
  list-style: none;
}
</style>
