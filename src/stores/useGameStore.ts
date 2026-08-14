import { defineStore } from 'pinia'
import { useCards } from '@/composables/useCards'
import { ref } from 'vue'
import { useSettingsStore } from '@/stores/useSettingsStore'

export const useGameStore = defineStore('game', () => {
  const { generateCards } = useCards()
  const settings = useSettingsStore()
  const cards = ref(generateCards())
  const correctIcons = ref(0)

  const maxRounds = ref(settings.numberOfRounds)
  const currentRound = ref(1)

  function startGame() {
    currentRound.value = 1
    correctIcons.value = 0

    generateNewCards()
  }

  function generateNewCards() {
    cards.value = generateCards()
  }

  function endRound() {
    if (currentRound.value >= maxRounds.value) {
      alert(`The end, your score was: ${correctIcons.value}`)
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

  return {
    validateClick,
    startGame,
    endRound,
    cards,
    currentRound,
    correctIcons,
  }
})
