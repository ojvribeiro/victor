<template>
  <div class="container mx-auto">
    <Post :id="id" />
  </div>
</template>


<script setup>
  const route = useRoute()

  const id = route.params.id
</script>
