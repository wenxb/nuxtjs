<script setup>
  const text = await useFetch('/api/test')
</script>

<template>
  <div>
    Home {{text}}
  </div>
</template>

<style scoped>

</style>
