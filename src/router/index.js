import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: '/',
      name: 'Home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeView.vue')
    },
    {
        path: '/hello',  // Route avec paramètre dynamique :name
        name: 'Hello',
        component: () => import('../views/SayHelloView.vue')
    },
    {
      path: '/albums',
      name: 'Albums',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AlbumsView.vue')
    },
    {
      path: '/admin',
      name: 'Admin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AdminView.vue')
    }
  ]
})

export default router
