<!-- To watch changes of a ref -->

<script setup lang="ts">
import { useTemplateRef, onMounted, watchEffect } from 'vue'

const input = useTemplateRef('my-input')

onMounted(() => {
  if (input.value) {
    input.value.focus()
  }
})

// Add the watchEffect
// this watches if the element is mounted or not
watchEffect(() => {
  if (input.value) {
    input.value.focus()
  } else {
    alert(`The element is not mounted`)
  }
})
</script>

<template>
  <input ref="my-input" />
</template>
