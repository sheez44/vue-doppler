<template>
  <div>
    <progress id="progress-bar" :value="timeRemaining" :max="settings.timer"></progress>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useGameStore } from '@/stores/useGameStore'

const { settings, round } = defineProps<{
  settings: {
    timer: number
  }
  round: number
}>()

const timeRemaining = ref(settings.timer)
const updateTime = 100
let timerInterval: ReturnType<typeof setInterval> | null = null
const game = useGameStore()
const { endRound } = game

function startTimer() {
  stopTimer()

  timeRemaining.value = settings.timer

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

watch(
  () => round,
  () => {
    startTimer()
  },
)

onMounted(() => {
  startTimer()
})

onBeforeUnmount(() => {
  stopTimer()
})
</script>
