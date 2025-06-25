<!-- With this method you don't have to specify the values to track, it will know it based to the data used in the function passed -->

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

let count = ref(0)

watchEffect(() => {
  alert(`Count is now: ${count.value}`)
  //   With watchEffect() you don't use oldValue and newValue as arguments. Just use the reactive value.
})
</script>

<template>
  <button @click="count++">Increase</button>
  <p>{{ count }}</p>
</template>
