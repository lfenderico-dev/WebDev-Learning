<script setup lang="ts">
import { ref } from 'vue'

let a = ref(true)

let people = ref([])
</script>

<template>
  <!-- Example of single line checkbox -->
  <input type="checkbox" id="example" v-model="a" />
  <label for="checkbox">{{ a }}</label>
  <!-- When the checkbox is clicked the value reverses -->

  <br />

  <!-- Let's bind multiple checkboxes into an array -->
  <div>Checked names: {{ people }}</div>

  <input type="checkbox" id="person1" v-model="people" value="Lorenzo" />
  <label for="person1">Lorenzo</label>

  <input type="checkbox" id="person2" v-model="people" value="Andrea" />
  <label for="person2">Andrea</label>

  <input type="checkbox" id="person3" v-model="people" value="Sole" />
  <label for="person3">Sole</label>
</template>
