<script setup lang="ts">
import { ref, watch } from 'vue'

let a = ref(1)
let b = ref(2)

// create a watcher to track both
watch([a, b], ([newA, newB], [oldA, oldB]) => {
  alert(`a: ${oldA} -> ${newA}, b: ${oldB} -> ${newB}`)
})
</script>

<template>
  <label for="a"> Put here the value of a</label>
  <br />
  <input type="number" id="a" v-model.lazy.trim.number="a" />

  <br />
  <br />

  <label for="b"> Put here the value of b</label>
  <br />
  <input type="number" id="b" v-model.lazy.trim.number="b" />
</template>
