<script setup lang="ts">
import { ref } from 'vue'

// Declare a style object
const styleObj = ref({
  color: 'red',
  fontSize: '25px',
  'background-color': 'black',
})
// Using camelCasing is better than using ''.
</script>

<template>
  <!-- Define the element with the styleObj as style value: -->
  <div :style="styleObj">Hi everyone!</div>
</template>
