<template>
  <div>
    <progress id="progress-bar" :value="timeRemaining / 1000" :max="settings.timerPerRound" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useGameStore } from '@/stores/useGameStore'
import { useSettingsStore } from '@/stores/useSettingsStore'

const settings = useSettingsStore()

const game = useGameStore()
const { currentRound } = storeToRefs(game)
const { endRound } = game

const updateTime = 100
const timeRemaining = ref(settings.timerPerRound * 1000)

let timerInterval: ReturnType<typeof setInterval> | null = null

function startTimer() {
  stopTimer()

  timeRemaining.value = settings.timerPerRound * 1000

  timerInterval = setInterval(() => {
    timeRemaining.value -= updateTime

    if (timeRemaining.value <= 0) {
      timeRemaining.value = 0
      stopTimer()
      endRound()
    }
  }, updateTime)
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }
}

watch(currentRound, () => {
  startTimer()
})

onMounted(() => {
  startTimer()
})

onBeforeUnmount(() => {
  stopTimer()
})
</script>
