<template>
  <div class="p-pane">
    <div class="flex flex-col items-center">
      <Trophy size="120" color="var(--color-yellow)" />
      <div class="font-bold text-2xl my-1">Game Completed!</div>
      <div>Great job!</div>
    </div>
    <ResultsPanes />
  </div>
</template>

<script setup lang="ts">
import ResultsPanes from '@/components/ResultsPanes.vue'
import { Trophy } from '@lucide/vue'
</script>

<style scoped></style>
