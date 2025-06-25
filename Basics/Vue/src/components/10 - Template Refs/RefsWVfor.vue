<!-- When ref is used inside v-for, the corresponding ref should contain an Array value -->

<script setup lang="ts">
import { ref, useTemplateRef, onMounted } from 'vue'

// Here is the array
const list = ref(['example1', 'example2', 'example3'])

// Variable to refer to the items ref
const itemRefs = useTemplateRef('items')

// If mounted correctly alert all good
onMounted(() => alert('All good!'))
</script>

<template>
  <!-- define an unordered list -->
  <ul>
    <!-- use a v-for to set each list element based on the array -->
    <li v-for="item in list" ref="items">
      {{ item }}
    </li>
  </ul>
</template>
