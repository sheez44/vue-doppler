import { type IconName } from '@/data/icons'

export function pickRandomUniqueIcons(array: readonly IconName[], amount: number): IconName[] {
  if (array.length < amount) {
    throw new Error('Requested more unique icons than available.')
  }

  const cards: IconName[] = []

  while (cards.length < amount) {
    const randomNumber = generateRandomNumber(array)
    const icon = array[randomNumber]

    if (icon !== undefined && !cards.includes(icon)) {
      cards.push(icon)
    }
  }

  return cards
}

export function generateRandomNumber<T>(array: readonly T[]): number {
  return Math.floor(Math.random() * array.length)
}

export function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
