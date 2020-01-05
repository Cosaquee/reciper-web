<template>
  <header class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
    <div class="flex-1 flex justify-between items-center">
      <span class="font-semibold text-2xl tracking-tight">Dieter</span>
    </div>

    <label for="menu-toggle" class="pointer-cursor lg:hidden block"
      ><svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg
    ></label>
    <input class="hidden" type="checkbox" id="menu-toggle" />

    <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
      <nav>
        <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
          <li v-if="isLoggedIn">
            <router-link to="/breakfast" class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">Breakfast</router-link>
          </li>
          <li v-if="isLoggedIn"><router-link to="/snack" class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">Snack</router-link></li>
          <li v-if="isLoggedIn"><router-link to="/dinner" class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">Dinner</router-link></li>
          <li v-if="isLoggedIn">
            <router-link to="/supper" class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2"
              >Supper</router-link
            >
          </li>
        </ul>
      </nav>
      <router-link v-if="isLoggedIn" to="/meal/new" class="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">Add meal</router-link>
      <router-link v-if="!isLoggedIn" to="/login" class="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">Login</router-link>
      <a type="button" class="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor" v-if="isLoggedIn" @click="logout"> Logout</a>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Navbar',
  computed: {
    ...mapGetters(['isLoggedIn', 'isLoading'])
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch('logout');
        this.$router.push('/login');
      } catch (error) {
        throw new Error(error);
      }
    }
  }
};
</script>

<style>
#menu-toggle:checked + #menu {
  display: block;
}
</style>
