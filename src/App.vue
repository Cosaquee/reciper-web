<template>
  <div class="relative">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import axios from 'axios';
import store from './store';
import router from './router';

export default {
  components: {
    Navbar
  },
  created: function () {
    axios.interceptors.response.use(undefined, function(err) {
      // eslint-disable-next-line
      return new Promise(function(_resolve, _reject) {
        if (err.response.status === 401 && err.response.config && !err.response.config.__isRetryRequest) {
          store.dispatch('logout').then(() => {
            router.push('/login');
          });
        }
        throw err;
      });
    });
  }
};
</script>

<style></style>
