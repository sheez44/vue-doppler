import { useCards } from '@/composables/useCards'
import { ref } from 'vue'

export function useGame() {
  const { generateCards } = useCards()

  const cards = ref(generateCards())
  const correctIcons = ref(0)
  const maxRounds = ref(10)
  const currentRound = ref(1)

  let roundTimeout: ReturnType<typeof setTimeout> | null = null

  function startGame() {
    console.log('starting game')
    currentRound.value = 1
    correctIcons.value = 0

    generateNewCards()
    startRoundTimer()
  }

  function startRoundTimer() {
    stopRoundTimer()

    roundTimeout = setTimeout(endRound, 8000)
  }

  function stopRoundTimer() {
    if (roundTimeout) {
      clearTimeout(roundTimeout)
      roundTimeout = null
    }
  }

  function generateNewCards() {
    cards.value = generateCards()
  }

  function endRound() {
    stopRoundTimer()

    if (currentRound.value >= maxRounds.value) {
      alert(`The end, your score was: ${correctIcons.value}`)
      return
    }

    currentRound.value++
    generateNewCards()
    startRoundTimer()
  }

  function validateClick(icon: string) {
    if (icon === cards.value.sharedIcon) {
      correctIcons.value++
      console.log('win')
    } else {
      console.log('lose')
    }

    endRound()
  }

  return {
    generateNewCards,
    validateClick,
    startGame,
    cards,
    currentRound,
  }
}
