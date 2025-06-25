<script setup lang="ts">
// We can pass an object to a class to dinamically activate/toggle classes:
import { ref } from 'vue'

// Create a class
let classObj = ref({
  'bg-lime-700': true,
  'w-25': false,
})
</script>

<template>
  <h1>Hello worldddd!!</h1>

  <!-- This div will have `bg-lime-700` as a property and not `w-25` because it is falsy! -->
  <div :class="classObj">Hello everyone!</div>
</template>
