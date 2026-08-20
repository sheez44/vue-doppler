<template>
  <div
    class="grid grid-cols-3 items-center px-pane py-2 shadow-[0_1px_6px_-2px] shadow-primary relative"
  >
    <div>
      <p class="my-0 text-sm">Round</p>
      <p class="font-bold text-xl my-0">{{ currentRound }} / {{ numberOfRounds }}</p>
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
import { useSettingsStore } from '@/stores/useSettingsStore.ts'
import { storeToRefs } from 'pinia'

const settings = useSettingsStore()
const game = useGameStore()
const { numberOfRounds } = storeToRefs(settings)
const { currentRound, correctIcons } = storeToRefs(game)
</script>

<style scoped></style>
