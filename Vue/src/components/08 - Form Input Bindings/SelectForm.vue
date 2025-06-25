<script setup lang="ts">
import { ref } from 'vue'

let selected = ref('')

let options = ref([
  { text: 'one', value: '1' },
  { text: 'two', value: '2' },
  { text: 'three', value: '3' },
  { text: 'four', value: '4' },
])
</script>

<template>
  <h1>Select</h1>
  <!-- Used to link what you selected with the empity variable -->
  <select v-model="selected">
    <!-- We use the v-for to take all the elements in the array and display an option for each -->
    <option v-for="option in options" :value="option.value">
      {{ option.text }}
      <!-- Select a text and display a value -->
    </option>
  </select>

  <!-- Display what you've selected -->
  <div>You selected: {{ selected }}</div>
</template>
