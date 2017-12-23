<template>
  <div class="post-page container" v-if="post">
      <h1>{{post.title}}</h1>
      <p>{{post.body}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Post',
  data: function () {
    return {
      posts: [],
      post: ''
    }
  },
  created () {
    var postId = this.$route.params.id
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      this.post = response.data[postId]
    //   console.log(response.data)
    })
  }
}
</script>


<style>

</style>