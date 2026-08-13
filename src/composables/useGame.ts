import { useCards } from '@/composables/useCards'
import { ref } from 'vue'

export function useGame() {
  const { generateCards } = useCards()

  const cards = ref(generateCards())
  const correctIcons = ref(0)

  const settings = {
    timer: 8000,
  }

  const maxRounds = ref(10)
  const currentRound = ref(1)

  function startGame() {
    console.log('starting game')

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

    console.log('ending round')

    currentRound.value++
    generateNewCards()
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
    endRound,
    cards,
    currentRound,
    settings,
  }
}
