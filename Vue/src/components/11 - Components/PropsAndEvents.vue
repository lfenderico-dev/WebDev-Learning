<!-- Parent component -->

<script setup lang="ts">
import { ref } from 'vue'

// Import the component:
import Example from './components/Example.vue'
// importing the prop from the data file
import recipe from './assets/data.ts'

const fontSize = ref(16)
</script>

<template>
  <!-- And then you can refer to what object of the array you want to  -->
  <Example :recipe="recipe[1]" />

  <!-- If you have to render 2 or plus objects try to use the v-for loop to iterate through that -->
  <div :style="{ fontSize: fontSize + 'px' }">
    <Example
      v-for="recip in recipe"
      :recipe="recip"
      @enlarge-text="fontSize++"
      @shrink-text="fontSize--"
    />
    <!-- The `@enlarge-text="fontSize++"` and `@shrink-text="fontSize--"` listens to the events emitted from the child component and react to it adding/subtratting 1 to the variable that controls the fontsize. -->
  </div>
</template>
