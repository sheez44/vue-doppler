import { icons } from '@/data/icons'
import { ref } from 'vue'

export function useDeck() {
  const deckIcons = [...icons]

  function generateDeck() {
    const deckA = []
    const deckB = []
    const uniqueCard = deckIcons[generateRandomNumber(deckIcons)]
    deckA.push(uniqueCard)
    deckB.push(uniqueCard)

    generateDeckA()
    generateDeckB()
    console.log(deckA, deckB, uniqueCard)
    return {
      deckA,
      deckB,
    }
  }

  function generateDeckA() {
    let maxRounds = 7

    while (maxRounds > 0) {
      const icon = generateRandomNumber(deckIcons)
      if (!deckA.includes(deckIcons[icon])) {
        deckA.push(deckIcons[icon])
        maxRounds--
      }
    }
  }

  function generateDeckB() {
    let maxRounds = 7

    while (maxRounds > 0) {
      const icon = generateRandomNumber(deckIcons)
      if (!deckA.includes(deckIcons[icon]) && !deckB.includes(deckIcons[icon])) {
        deckB.push(deckIcons[icon])
        maxRounds--
      }
    }
  }

  function generateRandomNumber(array) {
    return Math.floor(array.length * Math.random())
  }

  return {
    generateDeck,
  }
}
