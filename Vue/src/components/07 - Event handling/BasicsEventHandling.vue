<!-- Syntax: v-on:event="handler" -->
<!-- Syntax2: @event="handler" -->

<script setup lang="ts">
import { ref } from 'vue'

// Declare count
let count = ref(0)

// Declare a function
function showValue(event: Event) {
  // event.target is the input element
  const input = event.target as HTMLInputElement
  alert(input.value)
}
</script>

<template>
  <!-- Example of inline event handler: -->
  <button @click="count++">Click me to add one: {{ count }}</button>

  <br />

  <!-- Example of methods event handler -->
  <input @input="showValue($event)" placeholder="Type something..." />
  <!-- `$event` is a special value that refers to the event DOM object (the event that just happened) -->
</template>
