<!-- Computed properties are by default getter-only. If you attempt to assign a new value to a computed property, you will receive a runtime warning. In the rare cases where you need a "writable" computed property, you can create one by providing both a getter and a setter: -->

<script setup lang="ts">
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    ;[firstName.value, lastName.value] = newValue.split(' ')
  },
})

// So we can now do:
fullName.value = `Lorenzo Fenderico`
</script>

<template>
  <h2>Hello {{ fullName }}</h2>
</template>
