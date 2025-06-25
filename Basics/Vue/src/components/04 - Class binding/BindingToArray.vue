<script setup lang="ts">
import { ref } from 'vue'

// 1
// We can apply a list of classes with arrays:
const backgroundColor = ref('bg-blue-500')
const width = ref('w-24')
const height = ref('h-10')

// 2
// To set conditional classes with arrays:
const isActive = true
</script>

<template>
  <!-- 1 -->
  <!-- We can apply a list of classes with arrays: -->
  <div :class="[backgroundColor, width, height]">I love Vue!</div>

  <!-- 2 -->
  <!-- To set conditional classes with arrays: -->
  <div :class="[{ [backgroundColor]: isActive, [width]: !isActive }, height]">
    How are you guys?
  </div>
</template>
