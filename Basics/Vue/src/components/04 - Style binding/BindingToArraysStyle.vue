<script setup lang="ts">
import { ref } from 'vue'

// Declare some properties:
let id = ref({ id: '234' })
let color = ref({ color: 'blue' })
// Declare an array style:
const arr = ref([id.value, color.value])
</script>

<template>
  <!-- Create the element: -->
  <div :style="arr">Hey here! I am lightblue!</div>
</template>
