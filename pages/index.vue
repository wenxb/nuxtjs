<script setup>
  const {data} = await useFetch('/api/test')
</script>

<template>
  <div>
    Home <span>{{data}}</span>
  </div>
  <div>
    <NuxtLink to="/about">about</NuxtLink>
  </div>
</template>

<style scoped>

</style>
