import Vue from 'vue';
import VueRouter from 'vue-router';

import Breakfast from '../views/Breakfast.vue';
import Snack from '../views/meals/Snack.vue';
import Dinner from '../views/meals/Dinner.vue';

import NewMeal from '../views/NewMeal.vue';
import Meal from '../views/Meal.vue';

import store from '../store/index.js';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/breakfast',
    name: 'breakfast',
    component: Breakfast,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/snack',
    name: 'snack',
    component: Snack,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dinner',
    name: 'dinner',
    component: Dinner,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/meal/new',
    name: 'newmeal',
    component: NewMeal,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/meal/:id',
    name: 'meal',
    component: Meal,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next('/login');
  } else {
    next();
  }
});

export default router;
