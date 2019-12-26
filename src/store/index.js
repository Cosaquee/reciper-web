import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import User from './modules/user';
import Meal from './modules/meal';

export default new Vuex.Store({
  modules: {
    user: User,
    meal: Meal
  }
});
