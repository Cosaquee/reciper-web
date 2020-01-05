<template>
  <div class="xl:w-1/2 mr-auto ml-auto">
    <h1 class="text-4xl mt-8 mb-4 text-center">{{ meal.name }}</h1>
    <MealTypeList v-bind:meal="meal" />
    <IngredientList v-bind:ingredients="meal.ingredients" />
    <StepsList v-bind:steps="meal.steps" />
  </div>
</template>

<script>
import MealTypeList from '../components/TypeList';
import IngredientList from '../components/IngredientList';
import StepsList from '../components/StepsList';

export default {
  name: 'Meal',
  components: {
    MealTypeList,
    IngredientList,
    StepsList
  },
  data() {
    return {
      meal: {}
    };
  },
  async created() {
    try {
      await this.$store.dispatch('loading');
      this.meal = await this.$store.dispatch('fetchMealDetails', { id: this.$route.params.id });
      await this.$store.dispatch('loading');
    } catch (error) {
      throw new Error(error);
    }
  }
};
</script>
