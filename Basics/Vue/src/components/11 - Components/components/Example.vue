<script setup lang="ts">
// Defining the prop
defineProps([`recipe`])

// To use it into the typescript you must save it to a variable and then you can use it.

// const prop = defineProps([something])
// console.log(something.title)
</script>

<template>
  <!-- To use it into template -->

  <!-- Use it with v-bind to set tag properties -->
  <img :src="'./assets/' + recipe.image" />

  <!-- You can also use it with txt interpolation -->
  <h3>{{ recipe.title }}</h3>

  <!-- To emit an event -->
  <div>
    <h4>{{ recipe.ingredients[1] }}</h4>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
    <!-- Now when the button is clicked the child component emits this event called `enlarge-text`.
    The parent component should listen to this event and react. -->
    <br />
    <button @click="$emit('shrink-text')">Shrink text</button>
  </div>
</template>
