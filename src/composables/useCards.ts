import { icons } from '@/data/icons'
import { pickRandomUniqueIcons, generateRandomNumber } from '@/utils/random'
import { shuffleArray } from '@/utils/shuffle'

import { useSettingsStore } from '@/stores/useSettingsStore'

export function useCards() {
  function generateCards() {
    const settings = useSettingsStore()

    const iconsOnCardAmount = settings.iconsPerCard
    const uniqueIconAmount = settings.iconsPerCard * 2 - 1

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
