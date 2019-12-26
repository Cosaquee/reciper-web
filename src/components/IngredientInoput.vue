<template>
  <div class="sm:flex lg:flex">
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-1"
      type="text"
      placeholder="Name"
      name="name"
    />
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-1"
      type="text"
      placeholder="Amount"
      name="amount"
    />
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-1"
      type="text"
      placeholder="Type"
      name="amount_type"
    />
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-1"
      type="text"
      placeholder="Alternative amount"
      name="alternative_amount"
    />
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-1"
      type="text"
      placeholder="Alternative type"
      name="alternative_amount_type"
    />
  </div>
</template>

<script>
export default {
  name: 'IngredientInput'
}
</script>
