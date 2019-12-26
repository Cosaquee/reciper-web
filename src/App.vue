<template>
  <div class="relative">
    <div class="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50" v-if="isLoading">
      <span class="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0" style="top: 50%">
        <i class="fas fa-circle-notch fa-spin fa-5x"></i>
      </span>
    </div>
    <nav class="flex items-center justify-between flex-wrap bg-white p-6">
      <div class="flex items-center flex-shrink-0 text-text mr-6">
        <span class="font-semibold text-2xl tracking-tight">Dieter</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-base lg:flex-grow" v-if="isLoggedIn">
          <router-link to="/breakfast" class="block mt-4 lg:inline-block lg:mt-0 text-text hover:text-orange-400 mr-4">Breakfast</router-link>
          <router-link to="/snack" class="block mt-4 lg:inline-block lg:mt-0  text-text hover:text-orange-400 mr-4">Snack</router-link>
          <router-link to="/dinner" class="block mt-4 lg:inline-block lg:mt-0 text-text hover:text-orange-400 mr-4">Dinner</router-link>
          <router-link to="/supper" class="block mt-4 lg:inline-block lg:mt-0 text-text hover:text-orange-400 mr-4">Supper</router-link>
        </div>
        <div>
          <router-link v-if="isLoggedIn" to="/meal/new" class="block mt-4 lg:inline-block lg:mt-0 text-text hover:text-orange-400 mr-4"
            >Add meal</router-link
          >
          <router-link
            to="/login"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-text border-orange-600 hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            v-if="!isLoggedIn"
          >
            Login</router-link
          >
          <a
            type="button"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-text border-orange-600 hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            v-if="isLoggedIn"
            @click="logout"
          >
            Logout</a
          >
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  created: function() {
    this.$http.interceptors.response.use(undefined, function(err) {
      // eslint-disable-next-line
      return new Promise((_resolve, _reject) => {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
         this.$store.dispatch('logout').then(() => {
          this.$router.push('/login')
         })
        }
        throw err;
      });
    });
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch('logout');
        this.$router.push('/login');
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'isLoading'])
  }
};
</script>

<style></style>
