<!-- A watcher lets you run custom code whenever a specific piece of data changes in your Vue app. -->

<!-- Syntax:
 watch([value/function to track], [callback that runs when the value change]) -->

<script setup lang="ts">
import { ref, watch } from 'vue'

let count = ref(0)

// a watcher to track the changes of the count variable
watch(count, (newValue, oldValue) => {
  // everytime the value changes this runs
  alert(`Value changed from ${oldValue} to ${newValue}`)
  // use unwatch() to stop the watcher
})
</script>

<template>
  <button @click="count++">Increse the value</button>
  <br />
  <button @click="count--">Decrese the value</button>
  <div>Count: {{ count }}</div>
</template>
