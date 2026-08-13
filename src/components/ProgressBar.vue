<template>
  <div>
    <progress id="progress-bar" :value="timeRemaining" :max="settings.timer"></progress>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

const { settings, round } = defineProps<{
  settings: {
    timer: number
  }
  round: number
}>()

const emit = defineEmits<{
  timeout: []
}>()

const timeRemaining = ref(settings.timer)
const updateTime = 100
let timerInterval: ReturnType<typeof setInterval> | null = null

function startTimer() {
  stopTimer()

  timeRemaining.value = settings.timer

  timerInterval = setInterval(() => {
    timeRemaining.value -= updateTime

    if (timeRemaining.value <= 0) {
      timeRemaining.value = 0
      stopTimer()
      emit('timeout')
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
