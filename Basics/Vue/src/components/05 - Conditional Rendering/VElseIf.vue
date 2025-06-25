<script setup lang="ts">
// v-else-if
// if the precedent `v-if/v-else-if` is true => this is going to be skipped (element not rendered)
// if the precedent `v-if/v-else-if` is false => this is going to be rendered (if its condition is true obv.)

import { ref } from 'vue'

const type = ref('B')
</script>

<template>
  <div v-if="type == 'A'">Hello I am A</div>
  <div v-else-if="type == 'B'">Hello I am B</div>
  <!-- This is going to be displayed-->
  <div v-else-if="type == 'C'">Hello I am C</div>
  <div v-else>I am none</div>
</template>
