<!-- They are special words you add to events to quickly change how the event works. -->

<script setup lang="ts">
// function to handle the submit of the form
const submitForm = () => {
  alert(`Form submitted`)
}

// Function to alert a message!
const message = () => {
  alert(`Hello world!`)
}

// Function to say hello as a child element
const childMessage = () => {
  alert(`Hello! I am the child element!`)
}

// Move message
const moveMessage = () => {
  alert(`Move me!!`)
}
</script>

<template>
  <!-- 1) .prevent -->
  <!-- stops the default action of the browser (like submitting a form automatically reload the page) -->
  <button @click.prevent="submitForm">Submit!</button>

  <br />
  <br />

  <!-- 2) .stop -->
  <!-- Stops the event from affecting parent elements. If you don’t use it, parent elements might also react. -->
  <div>
    <button @click.stop="message">Click me to show a message!</button>
  </div>

  <br />
  <br />

  <!-- 3) .once -->
  <!-- handler runs just one time, after it does nothing -->
  <button @click.once="message">Hi! I will say it just one time!</button>

  <br />
  <br />

  <!-- 4) .self -->
  <!-- Only triggers if you click the element itself, not its children -->
  <div @click.self="message">
    <button @click="childMessage">Click me if you want!</button>
  </div>

  <br />
  <br />

  <!-- 5) .capture -->
  <!-- runs the parent's handler first and then the child one -->
  <div @click.capture="message">
    <button @click="childMessage">Click the button!</button>
  </div>

  <br />
  <br />

  <!-- 6) .passive -->
  <!-- Improves scroll performance (for touch/scroll events) -->
  <div @touchmove.passive="moveMessage" style="height: 100px; overflow: auto">Touch and move!</div>
</template>
