import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import BooksList from '../views/BooksList.vue'
import SingleBook from '../views/SingleBook.vue'
import ReadingList from '../views/ReadingList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/booksList',
    name: 'BooksList',
    component:BooksList
  },
  {
    path: '/readingList',
    name: 'ReadingList',
    component:ReadingList
  },
  {
    path: '/singleBook/:id',
    name: 'SingleBook',
    component: SingleBook
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
