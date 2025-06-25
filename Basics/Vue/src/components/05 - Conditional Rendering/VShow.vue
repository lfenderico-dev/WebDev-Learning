<!-- v-show -->
<!-- Behaves like v-if but the difference is that this (even if it is falsy) renders the element but toggles the display property from the element so it does not appear. -->

<script setup lang="ts">
import { ref } from 'vue'
const status = ref(true)
</script>

<template>
  <h1 v-show="status">Hey You see me!</h1>
  <h1 v-show="!status">I am here but you do not see me!</h1>
</template>
