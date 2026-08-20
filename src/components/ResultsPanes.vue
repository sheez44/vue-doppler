<template>
  <div>
    <Pane class="flex divide-x divide-gray-200">
      <ResultsPane>
        <template #icon><Star color="var(--color-yellow)" /></template>
        <template #title>Score</template>
        <template #info>{{ correctIcons }} / {{ numberOfRounds }}</template>
      </ResultsPane>
      <ResultsPane>
        <template #icon><Timer color="var(--color-primary)" /></template>
        <template #title>Total time</template>
        <template #info>{{ totalTime }}</template>
      </ResultsPane>
      <ResultsPane>
        <template #icon><Target color="var(--color-red)" /></template>
        <template #title>Accuracy</template>
        <template #info>{{ accuracy }}%</template>
      </ResultsPane>
    </Pane>
  </div>
</template>

<script setup lang="ts">
import ResultsPane from './ResultsPane.vue'
import { Star, Timer, Target } from '@lucide/vue'
import { useGameStore } from '@/stores/useGameStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import Pane from '@/components/Pane.vue'
import { useSettingsStore } from '@/stores/useSettingsStore.ts'

const settings = useSettingsStore()
const game = useGameStore()
const { elapsedTime } = game
const { correctIcons } = storeToRefs(game)
const { numberOfRounds } = storeToRefs(settings)

const accuracy = computed(() => {
  return Math.round((correctIcons.value / numberOfRounds.value) * 100)
})

const totalTime = computed(() => {
  return (elapsedTime() / 1000).toFixed(1)
})
</script>

<style scoped></style>
