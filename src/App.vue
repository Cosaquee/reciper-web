<template>
  <div class="relative">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  },
  created: function() {
    this.$http.interceptors.response.use(undefined, function(err) {
      // eslint-disable-next-line
      return new Promise((_resolve, _reject) => {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch('logout').then(() => {
            this.$router.push('/login');
          });
        }
        throw err;
      });
    });
  },
};
</script>

<style></style>
