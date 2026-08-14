<template>
  <div class="h-screen flex flex-col">
    <Navigation />
    <main class="flex-1 flex justify-center items-center">
      <div class="container py-4 h-1/2 w-1/2 bg-surface rounded-3xl">
        <routerView></routerView>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Navigation from './components/Navigation.vue'
</script>

<style scoped></style>
