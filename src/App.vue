<script setup>
  import { RouterView } from 'vue-router';  
</script>

<template>
  <RouterView :is="$route.meta.layout"/>
</template>

<style scoped>

</style>
