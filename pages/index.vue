<script setup>
  const text = ref('')
  onMounted(async () => {
    const {data} = await useFetch('/api/test')
    text.value = data.value
  })
</script>

<template>
  <div>
    Home {{text}}
  </div>
  <div>
    <NuxtLink to="/about">about</NuxtLink>
  </div>
</template>

<style scoped>

</style>
