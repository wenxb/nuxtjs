<script setup>
  const {data} = await useHttp('/api/test')
</script>

<template>
  <div>
    Home <span>{{data}}</span>
  </div>
  <div>
    <NuxtLink to="/about">about</NuxtLink>

  </div>
  <div>
    <NuxtLink to="/tool">Tool</NuxtLink>
  </div>
</template>

<style scoped>

</style>
