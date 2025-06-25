<script setup lang="ts">
// v-if
// If the value is true => element renders
// If the value is false => element does not render
const isGood = true
</script>

<template>
  <!-- Will be rendered  -->
  <h1 v-if="isGood">Vue is good!</h1>

  <!-- Won't be rendered -->
  <h2 v-if="!isGood">This message is hidden !!</h2>
</template>
