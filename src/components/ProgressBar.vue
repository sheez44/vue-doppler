<template>
  <div class="flex justify-center">
    <div class="relative size-18">
      <svg class="size-full -rotate-90" viewBox="0 0 100 100">
        <!-- Background circle -->
        <circle cx="50" cy="50" r="42" fill="none" class="stroke-purple-100" stroke-width="8" />

        <!-- Progress circle -->
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          class="stroke-primary"
          stroke-width="8"
          stroke-linecap="round"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="dashOffset"
        />
      </svg>

      <!-- Time -->
      <div class="absolute inset-0 flex items-center justify-center">
        <span class="text-sm font-semibold"> {{ seconds }}s </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount, watch } from 'vue'
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

// Circle
const radius = 42
const circumference = 2 * Math.PI * radius

const progress = computed(() => {
  return timeRemaining.value / (settings.timerPerRound * 1000)
})

const dashOffset = computed(() => {
  return circumference * (1 - progress.value)
})

const seconds = computed(() => {
  return (timeRemaining.value / 1000).toFixed(1)
})

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
