<!-- Without deep watch() the changes would not be triggered by nested items (in this case user.value.info.age would not be triggered with normal watch()) -->

<script setup lang="ts">
import { ref, watch } from 'vue'

let user = ref({
  name: `Lorenzo`,
  info: { age: 17 },
})

// Deep watcher: reacts to changes inside user, like user.value.info.age
watch(
  user,
  (newVal, oldVal) => {
    alert(`User or nested property has been changed!`)
  },
  // This is what makes the watch() a deep one.
  { deep: true },
)
</script>

<template></template>
