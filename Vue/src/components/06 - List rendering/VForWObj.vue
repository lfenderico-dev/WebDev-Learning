<!-- The iteration will happen through the properties of an object -->

<script setup lang="ts">
import { ref } from 'vue'

// Create the object
const myObject = ref({
  title: `How good is vue`,
  author: `Lorenzo Fenderico`,
  publishDate: `2025-06-22`,
})
</script>

<template>
  <!-- Create unordered list -->
  <ul>
    <!-- Create a list item for eac element in the object displaying index, key and value -->
    <li v-for="(value, key, index) in myObject">{{ index }} - {{ key }} : {{ value }}</li>
  </ul>
</template>
