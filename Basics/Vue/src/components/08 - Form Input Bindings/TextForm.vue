<!-- v-model is used to sync data with the input form (both ways) -->

<script setup lang="ts">
import { ref } from 'vue'

let name = ref('')
let message = ref('')
</script>

<template>
  <!-- To get single-line text form -->
  <input v-model.lazy.trim="name" type="text" placeholder="Type your name!" />
  <!-- .lazy is used to set that changes are synced when press ENTER or unfocus -->
  <!-- .trim is used to remove any useless spaces that the user could write -->
  <p>Hi! So your name is {{ name }}</p>

  <br />
  <br />
  <br />

  <!-- To get multiline text form -->
  <div>Type here your message</div>
  <textarea v-model="message" placeholder="Write your message here"></textarea>
  <p>Your message: {{ message }}</p>
</template>
