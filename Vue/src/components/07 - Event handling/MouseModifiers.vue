<script setup lang="ts">
// message function
const mess = () => {
  alert('Hey! You clicked me!')
}
</script>

<template>
  <button @click.right="mess">Click me with the secondary button</button>
  <br />
  <br />
  <button @click.left="mess">Click me with the primary button</button>
  <br />
  <br />
  <button @click.middle="mess">Click me with the auxiliary button</button>
</template>
