import { useCards } from '@/composables/useCards'
import { ref } from 'vue'

export function useGame() {
  const { generateCards } = useCards()

  const cards = ref(generateCards())

  function startGame() {
    console.log('starting game')
    generateNewCards()
  }

  function generateNewCards() {
    cards.value = generateCards()
  }

  function validateClick(icon: string) {
    if (icon === cards.value.sharedIcon) {
      console.log('win')
    } else {
      console.log('lose')
    }

    generateNewCards()
  }

  return {
    generateNewCards,
    validateClick,
    startGame,
    cards,
  }
}
