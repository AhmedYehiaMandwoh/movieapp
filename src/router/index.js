import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Edit from '@/views/Edit.vue'
import Signup from '@/views/Signup.vue'
import Signin from '@/views/Signin.vue'
import Error404 from '@/views/error/Error404.vue'

const routes = [
  {
    path: '/',
    redirect: "/home",
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/home/signin',
    name: 'signin',
    component: Signin,
    meta: {
      redirectIfLoggedIn: localStorage.getItem("token")
        ? true
        : false,

    },
  },
  {
    path: '/home/signup',
    name: 'signup',
    component: Signup,
    meta: {
      redirectIfLoggedIn: localStorage.getItem("token")
        ? true
        : false,

    },
  },
  {
    path: '/home/profile/:token',
    name: 'Edit',
    component: Edit,
    meta: {
      requiresAuth: true,
  },
  },
  {
    path: "/error-404",
    name: "error-404",
    component: Error404,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "error-404",
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.redirectIfLoggedIn)) {
    next({ path: "/home" });
    return;
  }
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('token')) {
      next();
      return;
    } else {
      router.push("/home/signin").catch(() => { });
    }
  } else {
    next();
  }
});
export default router
