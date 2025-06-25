<!-- Instead of normal js/tsc syntax to declare variables and consts in Vue use the `ref()` method. -->
<!-- You should use it because is the only way for Vue to track changes -->

<script setup lang="ts">
// To use ref import it:
import { ref } from 'vue'
// To declare with ref():
const num = ref(1) // Note that this is going to give an object back
// To access the value:
console.log(num.value)

// A little example:
let count = ref(0)
function increment() {
  count.value++
  console.log(count.value) //value update (automatically handled)
}

// when a change is set Vue does not update the data immediatly.
// If you need to get the value immediatly follow this example:

import { nextTick } from 'vue'

let count2 = ref(0)
async function increment2() {
  count2.value++
  await nextTick() // This waits until the DOM is up to date and then continue.
  console.log(count2.value)
}

// Working with arrays/objects:
let people = ref([`Lorenzo`, `Mario`, `Sole`])
console.log(people.value[2]) // Sole
</script>

<template>
  <button @click="increment">Click here to increment!!.{{ count }}</button>

  <br />

  <button @click="increment2">Click here to increment immediatly!! {{ count2 }}</button>
</template>
