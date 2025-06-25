<script setup lang="ts">
// 1. TEXT INTERPOLATION:
// Thanks to this we can use variables and expressions of js/tsc in an HTML tag's content:

// let's define some variables:
let name = `Lorenzo`
let age = 17
let isStudent = true
</script>

<template>
  <h1>Hello world!</h1>

  <!-- 1. TEXT INTERPOLATION: -->
  <!-- Thanks to this we can use variables and expressions of js/tsc in an HTML tag's content: -->

  <!-- Let's write an h2 with the name in the variable `name`: -->
  <h2>This website is made by {{ name }}</h2>

  <!-- you can also do expressions of any kind in it: -->
  <p>Hello! My name is {{ name }}, and I am {{ age }} years old.</p>
  <p>{{ isStudent ? `And Yes, I am a student` : `And I am not a student BTW.` }}</p>
  <!-- flow control statements won't work, only the ternary operator works -->
</template>
