import { icons } from '@/data/icons'
import { pickRandomUniqueIcons, generateRandomNumber } from '@/utils/random'
import { shuffleArray } from '@/utils/shuffle'

export function useCards() {
  const defaultSettings = {
    iconAmount: 16,
  }

  function generateCards(settings = {}) {
    const mergedSettings = {
      ...defaultSettings,
      ...settings,
    }

    const iconsOnCardAmount = mergedSettings.iconAmount / 2
    const uniqueIconAmount = mergedSettings.iconAmount - 1

    const allIcons = pickRandomUniqueIcons(icons, uniqueIconAmount)

    const cardA = allIcons.slice(0, iconsOnCardAmount)

    const sharedIconIndex = generateRandomNumber([cardA.length])

    const sharedIcon = cardA[sharedIconIndex]

    const cardB = [...allIcons.slice(iconsOnCardAmount), sharedIcon]

    return {
      cardA: shuffleArray(cardA),
      cardB: shuffleArray(cardB),
      sharedIcon,
    }
  }

  return {
    generateCards,
  }
}
