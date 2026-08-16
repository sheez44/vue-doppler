<template>
  <div>
    <ResultsPane>
      <template #icon><Star /></template>
      <template #title>Score</template>
      <template #info>{{ correctIcons }} / {{ maxRounds }}</template>
    </ResultsPane>
    <ResultsPane>
      <template #icon><Timer /></template>
      <template #title>Total time</template>
      <template #info>{{ totalTime }}</template>
    </ResultsPane>
    <ResultsPane>
      <template #icon><Target /></template>
      <template #title>Accuracy</template>
      <template #info>{{ accuracy }}%</template>
    </ResultsPane>
  </div>
</template>

<script setup lang="ts">
import ResultsPane from './ResultsPane.vue'
import { Star, Timer, Target } from '@lucide/vue'
import { useGameStore } from '@/stores/useGameStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const game = useGameStore()
const { elapsedTime } = game
const { correctIcons, maxRounds } = storeToRefs(game)

const accuracy = computed(() => {
  return Math.round((correctIcons.value / maxRounds.value) * 100)
})

const totalTime = computed(() => {
  return (elapsedTime() / 1000).toFixed(1)
})
</script>

<style scoped></style>
