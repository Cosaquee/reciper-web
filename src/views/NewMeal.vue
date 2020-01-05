<template>
  <div class="flex">
    <div class="ml-auto mr-auto pt-8">
      <h1 class="text-4xl p-2 ml-4">Add new meal</h1>
      <form>
        <div class="flex justify-center items-center ml-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-1"
            id="Name"
            type="text"
            placeholder="Name"
            v-model="name"
            required
          />
          <div class="inline-block relative w-64">
            <select
              class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 m-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              v-model="type"
            >
              <option value="breakfast">Breakfast</option>
              <option value="snack">Snack</option>
              <option value="dinner">Dinner</option>
              <option value="supper">Supper</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <button
            @click="submit"
            type="button"
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 h-10 m-2 border border-gray-400 rounded shadow"
          >
            Submit
          </button>
        </div>
        <div class="flex ml-5  text-gray-600">
          <div class="flex justify-center items-center">
            <input class="leading-tight rounded" type="checkbox" v-model="vegetables" />
            <span class="text-sm ml-1 mr-2">Vegetables</span>
          </div>
          <div class="flex justify-center items-center">
            <input class="leading-tight" type="checkbox" v-model="vegetarian" />
            <span class="text-sm ml-1 mr-2">Vegetarian</span>
          </div>
          <div class="flex justify-center items-center">
            <input class="leading-tight" type="checkbox" v-model="vegan" />
            <span class="text-sm ml-1 mr-2">Vegan</span>
          </div>
        </div>
        <div>
          <h2 class="text-2xl ml-4">Ingredients</h2>
          <div v-for="(ingredient, index) in ingredients" :key="index">
            <div class="ml-4 sm:flex lg:flex items-center">
              <h1 class="text-xl text-orange-400">{{ index }}</h1>
              <input
                class="shadow appearance-none border border-orange-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-1"
                type="text"
                placeholder="Name"
                name="name"
                v-model="ingredient.name"
              />
              <input
                class="shadow appearance-none border border-orange-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-1"
                type="text"
                placeholder="Amount"
                name="amount"
                v-model="ingredient.amount"
              />
              <input
                class="shadow appearance-none border border-orange-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-1"
                type="text"
                placeholder="Type"
                name="amount_type"
                v-model="ingredient.amount_type"
              />
              <input
                class="shadow appearance-none border border-orange-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-1"
                type="text"
                placeholder="Alternative amount"
                name="alternative_amount"
                v-model="ingredient.alternative_amount"
              />
              <input
                class="shadow appearance-none border border-orange-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-1"
                type="text"
                placeholder="Alternative type"
                name="alternative_amount_type"
                v-model="ingredient.alternative_amount_type"
              />
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            @click="addIngredient"
            type="button"
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Add ingredient
          </button>
        </div>
        <div>
          <h2 class="text-2xl ml-4">Steps</h2>
          <div v-for="(step, index) in steps" :key="index">
            <div class="ml-4 sm:flex lg:flex items-center">
              <h1 class="text-xl text-orange-400">{{ index }}</h1>
              <input
                class="shadow appearance-none border border-orange-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-1"
                type="text"
                placeholder="Name"
                name="name"
                v-model="step.name"
              />
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            @click="addStep"
            type="button"
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Add step
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewMeal',
  data() {
    return {
      name: '',
      type: '',
      ingredients: [
        {
          name: '',
          amount: '',
          amount_type: '',
          alternative_amount_type: '',
          alternative_type: ''
        }
      ],
      steps: [{ name: '' }],
      vegetables: false,
      vegetarian: false,
      vegan: false
    };
  },
  methods: {
    addIngredient() {
      this.ingredients.push({});
    },
    addStep() {
      this.steps.push({});
    },
    async submit() {
      const data = await this.$store.dispatch('addMeal', this);
      this.$router.push(`/meal/${data.id}`);
    }
  }
};
</script>
