<!-- Happens when v-for takes an integer -->
<!-- In this case the action will repeat based on a range that starts from 1 -->

<script setup lang="ts"></script>

<template>
  <div v-for="n in 8">This is the {{ n }} time I am here!</div>
</template>
