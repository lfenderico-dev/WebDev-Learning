<!-- used to cancel any side effect that runs in the watcher, like API fetching -->
<!-- cleanup is applicable when we have a timed or repeated side effect -->

<script setup lang="ts">
import { ref, watchEffect, onWatcherCleanup } from 'vue'

// WatchEffect takes a callback with newId as parameter (that is the value to track)
watchEffect((newId) => {
  const controller = new AbortController() // Set up the controller to stop the fetch

  //   Fetch takes two arguments: API to fetch, the option that says to fetch: "If this AbortController gets aborted, cancel this request, and then is used to continue with a function"
  fetch(`/api/${newId}`, { signal: controller.signal }).then((response) => {
    // callback logic here (what you do with the API response)

    // Takes the response of the fetch and convert it into a json format, saving it into a constant named data.
    const data = response.json()
  })

  //
  onWatcherCleanup(() => {
    // abort stale request
    controller.abort() // This line aborts the request
  })
})
</script>

<template></template>
