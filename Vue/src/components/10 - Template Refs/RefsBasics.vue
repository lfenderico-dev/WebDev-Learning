<!-- Template Refs are like giving a name tag to parts of your webpage so your code can find and use them easily -->

<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue'

// the first argument must match the ref value in the template
const input = useTemplateRef('my-input') // to call the element with the ref

// when mounted to this:
onMounted(() => {
  if (input.value) {
    input.value.focus() // focus on the input when it is mounted
  }
})
</script>

<template>
  <!-- Assign to this element the ref -->
  <input ref="my-input" />
</template>
