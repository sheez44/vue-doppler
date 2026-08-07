import { icons } from '@/data/icons'
import { pickRandomUniqueIcons, generateRandomNumber } from '@/utils/random'
import { shuffleArray } from '@/utils/shuffle'

export function useCards() {
  function generateCards() {
    const allIcons = pickRandomUniqueIcons(icons, 15)

    const cardA = allIcons.slice(0, 8)

    const sharedIcon = cardA[generateRandomNumber(cardA)]

    const cardB = shuffleArray([...allIcons.slice(8), sharedIcon])

    return {
      cardA,
      cardB,
      sharedIcon,
    }
  }

  return {
    generateCards,
  }
}
