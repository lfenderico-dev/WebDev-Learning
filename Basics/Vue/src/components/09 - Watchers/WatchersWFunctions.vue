<!-- You can also pass a function to watch() to watch the result -->

<script setup lang="ts">
import { ref, watch } from 'vue'

let firstName = ref('')
let lastName = ref('')

// Watch a getter function that returns full name
watch(
  // (this is the function)
  () => `${firstName.value} ${lastName.value}`,
  (newVal, oldVal) => {
    alert(`Full name changed from ${oldVal} to ${newVal}`)
  },
)
</script>

<template>
  <!-- Created 2 input fields to show how this works. Try to change data. -->
  <label for="firstName">What is your first name?</label>
  <br />
  <input type="text" v-model.lazy.trim="firstName" id="firstName" />

  <br />
  <br />

  <label for="lastName"> What is your last name?</label>
  <br />
  <input type="text" v-model.lazy.trim="lastName" id="lastName" />
</template>
