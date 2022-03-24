import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import LoginPage from '../views/LoginPage.vue'
import TestView from '../views/TestView.vue'
import RegisterView from '../views/RegisterView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: {
      layout: 'MyCustomLayoutLogin' // name of the layout
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: {
      layout: 'MyCustomLayoutLogin' // name of the layout
    }
  },
  {
    path: '/users',
    component: TestView,
    name: 'test-view',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/users/:id/todos',
    name: 'view-tasks',
    component: UserView,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') == null) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
