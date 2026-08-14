<template>
  <div class="flex flex-col h-full">
    <Settings />

    <RouterLink
      to="/game"
      class="bg-primary text-white hover:bg-primary-light no-underline rounded-2xl inline text-center py-2 mt-auto"
      >Start game</RouterLink
    >
  </div>
</template>

<script setup lang="ts">
import Settings from '@/components/Settings.vue'
</script>

<style scoped></style>
