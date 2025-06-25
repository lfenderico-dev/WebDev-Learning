<!-- Used if you want to access the owner component's DOM in a watcher callback after Vue has updated it -->
<!-- Useful like when we sync a lot of data in one time so that the watcher does not fire that lot of times but just when the DOM is updated -->

<script setup lang="ts">
import { watchEffect } from 'vue'
watchEffect(
  () => {
    // callback logic here
  },
  { flush: 'post' },
)

// or shortcut

import { watchPostEffect } from 'vue'

watchPostEffect(() => {
  /* executed after Vue updates */
})
</script>

<template></template>
