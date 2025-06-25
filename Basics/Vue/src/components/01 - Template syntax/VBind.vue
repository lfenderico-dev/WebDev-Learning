<script setup lang="ts">
let someId = 345
let hrefVue = `https://vuejs.org`
let isButtonDisabled = true
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:lightblue',
}
let property = `href` // A property must be a string!
</script>

<template>
  <h1>Hello world 2!</h1>

  <!-- To assign the value of a variable/constant to an attribute use `v-bind` -->
  <!-- Syntax: v-bind:[attribute]=(value) -->
  <div v-bind:id="someId">A div with an Id!</div>

  <!-- There is a shorthand: -->
  <p>This is a paragraph with a <a :href="hrefVue">link to Vue website!</a></p>

  <!-- Example with boolean attributes: -->
  <button :disabled="isButtonDisabled">Button here!</button>
  <!-- isButtonDisabled is true so the button is disabled-->

  <!-- How to bind multiple attributes: -->
  <div v-bind="objectOfAttrs">I have multiple attributes assigned!</div>

  <!-- attribute can also be a variable: -->
  <p>This is an example <a :[property]="hrefVue">of Vue Website!</a></p>
</template>
