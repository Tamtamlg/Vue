import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Blog from '@/components/Blog'
import About from '@/components/About'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: Post
    }
  ]
})
