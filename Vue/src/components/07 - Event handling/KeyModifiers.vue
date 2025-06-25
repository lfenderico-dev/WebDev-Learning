<script setup lang="ts">
// Message function
const message = () => {
  alert(`Hello! You clicked something that triggers this`)
}
</script>

<template>
  <!-- When you focus on this element and click the key Alt+Enter the message is shown -->
  <input @keydown.alt.enter="message" placeholder="Press ALT+Enter!" />

  <br />
  <br />

  <!-- this will run even if other keys are pressed with it -->
  <button @click.ctrl="message">Click this with Ctrl</button>

  <br />
  <br />

  <!-- this will run only with ctrl -->
  <button @click.ctrl.exact="message">Click only with Ctrl</button>
</template>
