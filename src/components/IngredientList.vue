<template>
  <section>
    <h2 class="text-2xl ml-16 mb-2">Ingredients:</h2>
    <div class="ml-16">
      <li v-for="(ingredient, index) in ingredients" :key="index">
        {{ ingredient.amount }} {{ ingredient.amount_type }} {{ ingredient.name }} {{ ingredient.alternative_amount }}
        {{ ingredient.alternative_amount_type }}
      </li>
    </div>
  </section>
</template>

<script>
export default {
    name: 'IngredientList',
    props: ['ingredients'],
}
</script>

<style></style>
