<script setup lang="ts">
import { ref } from 'vue'

const isGood = ref(true)

// V-else
// If the `v-if` is true => this is skipped (element not rendered)
// If the `v-if` is false => this is rendered
</script>

<template>
  <!-- This button changes the value of isGood -->
  <button @click="isGood = !isGood">Click here!</button>

  <!-- isGood = true -->
  <h1 v-if="isGood">Hello everyone!</h1>
  <!-- isGood = false -->
  <p v-else="isGood">Oh no!!</p>
</template>
