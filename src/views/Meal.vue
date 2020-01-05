<template>
  <div class="xl:w-1/2 mr-auto ml-auto">
    <h1 class="text-4xl mt-8 mb-4 text-center">{{ meal.name }}</h1>
    <section class="flex sm:ml-16 mb-4 justify-center text-center">
      <span class="flex inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black-700 mr-2 items-center">
        Vegetables
        <svg v-if="meal.vegetables" class="h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 507.2 507.2">
          <circle cx="253.6" cy="253.6" r="253.6" fill="#32ba7c" />
          <path d="M188.8 368l130.4 130.4c108-28.8 188-127.2 188-244.8v-7.2L404.8 152l-216 216z" fill="#0aa06e" />
          <g fill="#fff">
            <path
              d="M260 310.4c11.2 11.2 11.2 30.4 0 41.6l-23.2 23.2c-11.2 11.2-30.4 11.2-41.6 0L93.6 272.8c-11.2-11.2-11.2-30.4 0-41.6l23.2-23.2c11.2-11.2 30.4-11.2 41.6 0L260 310.4z"
            />
            <path
              d="M348.8 133.6c11.2-11.2 30.4-11.2 41.6 0l23.2 23.2c11.2 11.2 11.2 30.4 0 41.6l-176 175.2c-11.2 11.2-30.4 11.2-41.6 0l-23.2-23.2c-11.2-11.2-11.2-30.4 0-41.6l176-175.2z"
            />
          </g>
        </svg>
      </span>
      <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black-700 mr-2 flex items-center">
        Vegetarian
        <svg v-if="meal.vegetarian" class="h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 507.2 507.2">
          <circle cx="253.6" cy="253.6" r="253.6" fill="#32ba7c" />
          <path d="M188.8 368l130.4 130.4c108-28.8 188-127.2 188-244.8v-7.2L404.8 152l-216 216z" fill="#0aa06e" />
          <g fill="#fff">
            <path
              d="M260 310.4c11.2 11.2 11.2 30.4 0 41.6l-23.2 23.2c-11.2 11.2-30.4 11.2-41.6 0L93.6 272.8c-11.2-11.2-11.2-30.4 0-41.6l23.2-23.2c11.2-11.2 30.4-11.2 41.6 0L260 310.4z"
            />
            <path
              d="M348.8 133.6c11.2-11.2 30.4-11.2 41.6 0l23.2 23.2c11.2 11.2 11.2 30.4 0 41.6l-176 175.2c-11.2 11.2-30.4 11.2-41.6 0l-23.2-23.2c-11.2-11.2-11.2-30.4 0-41.6l176-175.2z"
            />
          </g>
        </svg>
      </span>
      <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black-700 mr-2 flex items-center">
        Vegan
        <svg v-if="meal.vegan" class="h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 507.2 507.2">
          <circle cx="253.6" cy="253.6" r="253.6" fill="#32ba7c" />
          <path d="M188.8 368l130.4 130.4c108-28.8 188-127.2 188-244.8v-7.2L404.8 152l-216 216z" fill="#0aa06e" />
          <g fill="#fff">
            <path
              d="M260 310.4c11.2 11.2 11.2 30.4 0 41.6l-23.2 23.2c-11.2 11.2-30.4 11.2-41.6 0L93.6 272.8c-11.2-11.2-11.2-30.4 0-41.6l23.2-23.2c11.2-11.2 30.4-11.2 41.6 0L260 310.4z"
            />
            <path
              d="M348.8 133.6c11.2-11.2 30.4-11.2 41.6 0l23.2 23.2c11.2 11.2 11.2 30.4 0 41.6l-176 175.2c-11.2 11.2-30.4 11.2-41.6 0l-23.2-23.2c-11.2-11.2-11.2-30.4 0-41.6l176-175.2z"
            />
          </g>
        </svg>
      </span>
    </section>
    <section>
      <h2 class="text-2xl ml-16 mb-2">Ingredients:</h2>
      <div class="ml-16">
        <li v-for="(ingredient, index) in meal.ingredients" :key="index">
          {{ ingredient.amount }} {{ ingredient.amount_type }} {{ ingredient.name }} {{ ingredient.alternative_amount }}
          {{ ingredient.alternative_amount_type }}
        </li>
      </div>
    </section>
    <section>
      <h2 class="text-2xl ml-16 mt-2">Steps:</h2>
      <div class="ml-16">
        <ul class="list-decimal list-inside">
          <li v-for="(step, index) in meal.steps" :key="index">
            {{ step.name }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Meal',
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
