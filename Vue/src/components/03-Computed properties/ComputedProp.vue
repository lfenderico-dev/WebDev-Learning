<!-- Computed properties are functions that return a value based on reactive data (so a ref() value) -->
<!-- The value is saved and the function is only revaluated when dependencies changes -->

<script setup lang="ts">
// Import utilities:
import { ref, computed } from 'vue'
// Declare a constant with a ref() object
const author = ref({
  name: `Mario Rossi`,
  books: [`Vue 2 - Advanced guide`, `Divina commedia`],
})
// write a computed ref:
const publishedBooks = computed(() => {
  return author.value.books.length > 0
    ? `Yes he has published: ${author.books}`
    : `No he has not published anything yet`
})
</script>

<template>
  <h1>This paragraph is for mr.{{ author.name }}</h1>
  <h2>The question is: Has he published anything?</h2>
  <p>The answer is: {{ publishedBooks }}</p>
</template>
