import axios from 'axios';

const state = {
  meals: []
};

const mutations = {};

const actions = {
  async addMeal(state, { name, type, ingredients, steps, vegetarian, vegan, vegetables }) {
    try {
      const data = await axios.post(
        `${process.env.VUE_APP_API_URL}/api/meals`,
        {
          meal: {
            name: name,
            category_id: type,
            ingredients: ingredients,
            steps: steps,
            vegetables: vegetables,
            vegetarian: vegetarian,
            vegan: vegan
          }
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      return data.data.data;
    } catch (error) {
      return error;
    }
  },
  async fetchMeals(state, { type }) {
    try {
      const data = await axios.get(`${process.env.VUE_APP_API_URL}/api/meals/category/${type}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      return data.data.data;
    } catch (error) {
      return error;
    }
  },
  async fetchMealDetails(state, { id }) {
    try {
      const data = await axios.get(`${process.env.VUE_APP_API_URL}/api/meals/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      return data.data.data;
    } catch (error) {
      return error;
    }
  }
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
};
