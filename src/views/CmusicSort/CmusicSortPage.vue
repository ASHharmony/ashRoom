<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
// console.log('s', route.query.sort)
</script>

<template>
  <div>{{ route.query.sort }}</div>
</template>
