<!-- If you want the watcher to execute the callback once: -->

<script setup lang="ts">
import { ref, watch } from 'vue'

let count = ref(0)

watch(
  count,
  (oldValue, newValue) => {
    alert(`Watcher triggered! Now count = ${newValue}`)
  },
  // This is what makes the watcher like this:
  { once: true },
)
</script>

<template>
  <button @click="count++">Increase</button>
  <p>{{ count }}</p>
</template>
