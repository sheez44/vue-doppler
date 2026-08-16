<template>
  <div class="grid grid-cols-3 pb-8 items-center">
    <div>
      <p class="my-0 text-sm">Round</p>
      <p class="font-bold text-xl my-0">{{ currentRound }} / {{ maxRounds }}</p>
    </div>

    <ProgressBar />
    <div>
      <p class="my-0 text-sm text-right">correct</p>
      <p class="font-bold text-xl my-0 text-right">{{ correctIcons }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProgressBar from './ProgressBar.vue'
import { useGameStore } from '@/stores/useGameStore'
import { storeToRefs } from 'pinia'

const game = useGameStore()

const { currentRound, maxRounds, correctIcons } = storeToRefs(game)
</script>

<style scoped></style>
