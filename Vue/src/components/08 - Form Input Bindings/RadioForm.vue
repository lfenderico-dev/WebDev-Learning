<script setup lang="ts">
import { ref } from 'vue'

let pick = ref('')
</script>

<template>
  <p>Pick your character!</p>
  <p>You picked: {{ pick }}</p>
  <!-- Value will change based on the choose -->

  <!--  v-model="pick" it's what links the value of the form to the variable -->
  <input type="radio" id="Batman" value="Batman" v-model="pick" />
  <label for="Batman"> Batman</label>

  <input type="radio" id="Hulk" value="Hulk" v-model="pick" />
  <label for="Hulk"> Hulk</label>

  <input type="radio" id="SpiderMan" value="SpiderMan" v-model="pick" />
  <label for="SpiderMan"> SpiderMan</label>

  <input type="radio" id="undo" value="" v-model="pick" />
  <label for="undo"> None </label>

  <!-- This form is reactive -->
</template>
