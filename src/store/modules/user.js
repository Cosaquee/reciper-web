import axios from 'axios';

const state = {
  user: {},
  token: localStorage.getItem('token') || '',
  error: undefined,
  isLoading: false
};

const mutations = {
  auth_success(state, { user, token }) {
    state.user = user;
    state.token = token;
  },
  auth_failure(state, error) {
    state.error = error;
  },
  loading(state) {
    state.isLoading = !!state.isLoading;
  },
  logout(state) {
    state.user = {};
    state.token = '';
  }
};
const actions = {
  // eslint-disable-next-line
  async login({ commit, _state }, { email, password }) {
    try {
      const response = await axios.post(`${process.env.VUE_APP_API_URL}/login`, {
        email: email,
        password: password
      });
      localStorage.setItem('token', response.data.token);
      commit('auth_success', { user: response.data.user, token: response.data.token });

      return response;
    } catch (error) {
      commit('auth_failure', { error: error });
    }
  },
  loading(state) {
    state.commit('loading');
  },
  logout(state) {
      // eslint-disable-next-line
    return new Promise((resolve, reject) => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');

      state.commit('logout');

      resolve();
    })
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
