import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./pages/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./pages/About.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('./pages/Blog.vue'),
  },
  {
    path: '/getdetailblog/:slug',
    name: 'GetDetailBlog',
    component: () => import('./pages/GetDetailBlog.vue'),
  },
  {
    path: '/categories/:slug',
    name: 'Categories',
    component: () => import('./pages/Categories.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router