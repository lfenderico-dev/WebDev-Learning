<!-- watch() is lazy by default so to have immediate results: -->

<script setup lang="ts">
import { ref, watch } from 'vue'

let count = ref(0)

watch(
  count,
  (oldValue, newValue) => {
    alert(`Watcher triggered! Now count = ${newValue}`)
  },
  // This is what makes the watcher like this:
  { immediate: true },
)
</script>

<template>
  <button @click="count++">Increase</button>
  <p>{{ count }}</p>
</template>
