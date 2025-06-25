<!-- Dynamic components: -->
<!-- Can choose wich component to display based on a condition -->
<script setup lang="ts">
import { ref } from 'vue'
import CompA from './components/ExampleA.vue'
import CompB from './components/ExampleB.vue'

const current = ref(CompA)
</script>

<template>
  <!-- buttons to change the value of `current` -->
  <button @click="current = CompA">Show A</button>
  <br />
  <button @click="current = CompB">Show B</button>
  <!-- this is what makes the component dynamic -->
  <component :is="current" />
</template>
