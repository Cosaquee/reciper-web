<template>
  <section>
    <h2 class="text-2xl ml-16 mt-2">Steps:</h2>
    <div class="ml-16">
      <ul class="list-decimal list-inside">
        <li v-for="(step, index) in steps" :key="index">
          {{ step.name }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StepsList',
  props: ['steps']
};
</script>

<style></style>
