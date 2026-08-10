import { icons } from '@/data/icons'
import { useCards } from '@/composables/useCards'
import { ref } from 'vue'

export function useGame() {
  const defaultSettings = {
    iconAmount: 16,
  }

  const { generateCards } = useCards()

  const cards = ref(generateCards())

  function startGame(settings) {
    console.log('starting game')
    generateNewCards()
  }

  function generateNewCards() {
    cards.value = generateCards(defaultSettings.iconAmount)
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
