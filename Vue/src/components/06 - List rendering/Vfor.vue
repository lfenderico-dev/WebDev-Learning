<!-- v-for -->
<!-- we can use this to render a list of items based on the array -->

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([{ message: `Hello` }, { message: `Hi` }])
</script>

<template>
  <!-- For every item in the array create an element with the content specified. -->
  <!-- Index is optional -->
  <li v-for="(item, index) in items">{{ item.message }}, index: {{ index }}</li>
</template>
