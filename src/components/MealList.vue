<template>
  <div class="flex">
    <ul class="ml-auto mr-auto py-24">
      <li class="list-disc list-inside text-2xl" v-for="(meal, index) in meals" :key="index">
        <router-link :to="{ name: 'meal', params: { id: meal.id } }">{{ meal.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MealList',
  props: ['mealName'],
  data() {
    return {
      meals: []
    };
  },
  async created() {
    try {
      const data = await this.$store.dispatch('fetchMeals', { type: this.mealName });
      this.meals = data;
    } catch (error) {
      throw new Error(error);
    }
  }
};
</script>
