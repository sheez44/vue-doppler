import { defineStore } from 'pinia'
import { useCards } from '@/composables/useCards'
import { ref } from 'vue'
import { useSettingsStore } from '@/stores/useSettingsStore'
import router from '@/router'

export const useGameStore = defineStore('game', () => {
  const { generateCards } = useCards()
  const settings = useSettingsStore()
  const cards = ref(generateCards())
  const correctIcons = ref(0)
  const gameStarted = ref(false)
  const gameStartedTime = ref(0)
  const gameEndTime = ref(0)
  const maxRounds = ref(settings.numberOfRounds)
  const currentRound = ref(1)

  function startGame() {
    gameStarted.value = true
    currentRound.value = 1
    correctIcons.value = 0
    startGameTimer()
    generateNewCards()
  }

  function startGameTimer() {
    gameStartedTime.value = Date.now()
  }

  function generateNewCards() {
    cards.value = generateCards()
  }

  function endRound() {
    if (currentRound.value >= maxRounds.value) {
      stopGame()
      router.push('/results')
      return
    }

    currentRound.value++
    generateNewCards()
  }

  function validateClick(icon: string) {
    if (icon === cards.value.sharedIcon) {
      correctIcons.value++
    }

    endRound()
  }

  function stopGame() {
    gameStarted.value = false
    gameEndTime.value = Date.now()
  }

  function elapsedTime() {
    if (gameStartedTime.value === 0) {
      return 0
    }

    const endTime = gameEndTime.value || Date.now()

    return endTime - gameStartedTime.value
  }

  return {
    validateClick,
    startGame,
    endRound,
    elapsedTime,
    cards,
    currentRound,
    correctIcons,
    maxRounds,
  }
})
