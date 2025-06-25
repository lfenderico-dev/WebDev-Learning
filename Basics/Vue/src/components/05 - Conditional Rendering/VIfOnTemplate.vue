<script setup lang="ts">
import { ref } from 'vue'
let status = ref(true)
</script>

<!-- You can also insert the v-if in the template tag -->
<!-- If the condition is true the template is going to be rendered, otherwise not -->
<template v-if="status === true">
  <h1>Example heading hello!</h1>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, corporis.</p>
</template>
