<template>
  <nav class="bg-navy py-4">
    <div class="container text-white">
      <RouterLink
        v-if="route.path !== '/'"
        to="/"
        title="Go back home"
        class="text-white text-3xl no-underline decoration-2 underline-offset-3 hover:underline"
        >Dobble</RouterLink
      >

      <span v-else class="text-white text-3xl">Dobble</span>

      <span class="mx-2">|</span>
      <span class="text-sm">match the icon</span>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped></style>
