<script setup>
const time = ref('')

onMounted(async () => {
  const {data} = await useHttp('/api/test')
  time.value = data.value
})
</script>

<template>
  <div>
    About Page
    <div>{{time}}</div>
  </div>
</template>

<style scoped>

</style>
