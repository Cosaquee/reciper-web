import axios from 'axios';

const state = {
  user: {},
  token: localStorage.getItem('token') || '',
  error: undefined,
  isLoading: false
};

const mutations = {
  auth_success(state, { user }) {
    state.user = user;
  },
  auth_failure(state, error) {
    state.error = error;
  },
  loading(state) {
    state.isLoading = !!state.isLoading;
  },
  logout(state) {
    state.user = {};
  }
};
const actions = {
  async login(state, { email, password }) {
    try {
      const response = await axios.post(`${process.env.VUE_APP_API_URL}/login`, {
        email: email,
        password: password
      });
      localStorage.setItem('token', response.data.token);
      state.commit('auth_success', { user: response.data.user });
    } catch (error) {
      state.commit('auth_failure', { error: error });
    }
  },
  loading(state) {
    state.commit('loading');
  },
  logout(state) {
    localStorage.removeItem('token');
    state.commit('logout');
  }
};

const getters = {
  isLoggedIn: state => !!state.token,
  token: state => state.token,
  isLoading: state => state.isLoading
};

export default {
  state,
  mutations,
  actions,
  getters
};
