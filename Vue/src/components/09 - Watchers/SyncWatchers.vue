<!-- It's also possible to create a watcher that fires synchronously, before any Vue-managed updates: -->

<script setup lang="ts">
import { watchEffect } from 'vue'

watchEffect(
  () => {
    //callback logic here
  },
  { flush: 'sync' },
)

// or shortcut:
import { watchSyncEffect } from 'vue'

watchSyncEffect(() => {
  /* executed synchronously upon reactive data change */
})
</script>

<template></template>
